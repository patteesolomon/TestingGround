import { TreeNode } from "../AST/TreeNode";
import { NameLand } from "./NameLand";
import { Profile } from "./Profile";
import { ProfileIterator } from "./ProfileIterator";


export class NameLandIterator implements ProfileIterator{
    private NameL: NameLand;
    private profileId: number;
    private type: string;

    private currentPosition : number;
    private cache: Profile [] = [];

    constructor(NameLa: NameLand, pId: number, type: string)
    {
        this.NameL = NameLa;
        this.profileId = pId;
        this.type = type;
        this.currentPosition = 0;
    }

    private lazyInit(){
        if (this.cache == null) {
            // this.cache = this.NameL.treeGraphRequest(this.profileId, this.type);
            // this.cache = [this.NameL.treeGraphRequest(this.profileId,this.type)];
        }
    }

    getNext(): any {
        if (this.hasMore()) {
            let result = this.cache[this.currentPosition];
            this.currentPosition++;
            return result;
        }
    }
    hasMore() {
        this.lazyInit();
        return this.currentPosition < this.cache.length;
    }
    hasNext(): boolean {
        throw new Error("Method not implemented.");
    }

}