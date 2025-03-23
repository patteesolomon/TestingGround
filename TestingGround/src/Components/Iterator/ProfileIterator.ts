import { Profile } from "./Profile";

export interface ProfileIterator {
    getNext(): Profile;
    hasNext(): boolean;
}