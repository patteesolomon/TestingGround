import { ProfileIterator } from "./ProfileIterator";

export class DiffIter {
    send(iterator: ProfileIterator, message: string){
        while (iterator.hasNext()) {
            var profile = iterator.getNext();
            console.log(profile, message)
        }
    }
}