/* @flow */
import type { Auth } from '../types';
import { apiPost } from './apiFetch';

export default async (auth: Auth, streamId: number, topic: string) =>
  apiPost(auth, 'mark_all_as_read', res => res, {
    stream_id: streamId,
    topic,
  });
