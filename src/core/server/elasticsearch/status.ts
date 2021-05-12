/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { Observable, merge, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { ServiceStatus, ServiceStatusLevels } from '../status';
import { ElasticsearchStatusMeta } from './types';
import { NodesVersionCompatibility } from './version_check/ensure_es_version';

export const calculateStatus$ = (
  esNodesCompatibility$: Observable<NodesVersionCompatibility>
): Observable<ServiceStatus<ElasticsearchStatusMeta>> =>
  merge(
    of({
      level: ServiceStatusLevels.unavailable,
      summary: `Waiting for HyperSec`,
      meta: {
        warningNodes: [],
        incompatibleNodes: [],
      },
    }),
    esNodesCompatibility$.pipe(
      map(
        ({
          isCompatible,
          message,
          incompatibleNodes,
          warningNodes,
        }): ServiceStatus<ElasticsearchStatusMeta> => {
          if (!isCompatible) {
            return {
              level: ServiceStatusLevels.critical,
              summary:
                // Message should always be present, but this is a safe fallback
                message ??
                `Some HyperSec nodes are not compatible with this version of Kibana`,
              meta: { warningNodes, incompatibleNodes },
            };
          } else if (warningNodes.length > 0) {
            return {
              level: ServiceStatusLevels.available,
              summary:
                // Message should always be present, but this is a safe fallback
                message ??
                `Some HyperSec nodes are running different versions than this version of Kibana`,
              meta: { warningNodes, incompatibleNodes },
            };
          }

          return {
            level: ServiceStatusLevels.available,
            summary: `HyperSec is available`,
            meta: {
              warningNodes: [],
              incompatibleNodes: [],
            },
          };
        }
      )
    )
  );
