var OPlayer = function () {
    var me = new OObject();
    me.visibility_range = 5;
    me.Memory = [];
    me.Needs = {}
    me.Needs['thirst'] = new OGame.Needs.ThirstNeed(Math.random() * 10);
    me.Cycle = function(){
        for(var y = this.y - this.visibility_range; y >= this.y + this.visibility_range; y++){
            for(var x = this.x - this.visibility_range; x >= this.x + this.visibility_range; x++){
                var objTile = OGame.GetTile(x,y,z);
                for(var strNeed in this.Needs){
                    for(var strRequired in this.Needs[strNeed].Required){
                        if(
                            (this.Needs[strNeed].Required[strRequired] == objTile.type) ||
                            (this.Needs[strNeed].Required[strRequired] == objTile.tile_type)
                        ){
                            if(typeof(this.Memory[this.Needs[strNeed].Required[strRequired]]) == 'undefined'){
                                this.Memory[this.Needs[strNeed].Required[strRequired]] = [];
                            }
                            this.Memory[this.Needs[strNeed].Required[strRequired]][
                                this.Memory[this.Needs[strNeed].Required[strRequired]].length
                            ] = objTile;
                        }
                    }
                }
            }
        }
    }
    me.Survive = function(){
        this.SetAction(
            new OGame.Actions.Explore()
        );
    }
    return me;
}