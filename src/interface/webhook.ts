import { IPostQueryResults, IThreadItem } from "./post";

enum EventName {
    postAdded = "post_added",
    postEdited = "post_edited",
    postRemoved = "post_removed",
}

export interface IWebhookRequest {
    event: EventName;
    url: string;
    thread: IThreadItem;
    post: IPostQueryResults;
}
