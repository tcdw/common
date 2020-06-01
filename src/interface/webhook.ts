import { IPostQueryResults, IThreadItem } from './post';

export enum EventName {
    postAdded = 'post_added',
    postEdited = 'post_edited',
    postRemoved = 'post_removed',
}

export interface IWebhookRequest {
    event: EventName;
    token: string | null;
    url: string;
    thread: IThreadItem;
    post: IPostQueryResults;
    parent: IPostQueryResults | null;
}
