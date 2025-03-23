import { ProfileIterator } from "./ProfileIterator";

export interface Iterinter {
    createTreeIterator(profileId: number): ProfileIterator
    treeGraphRequest(profileId: number): ProfileIterator
}