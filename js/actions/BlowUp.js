OGame.Actions.BlowUp = function(){
    var me =  new OAction();


    me.Exicute = function(){
        var objExplosion = OGame.AddPlayer(
            this.Object + '_explosion',
            OGame.Chars.Explosion

        );
        OGame.Map.AddObject(
            objExplosion,
            this.Object.x,
            this.Object.y,
            this.Object.z
        );
        this.Object.visible = false;
        this.Object.Action = {
            Exicute:function(){}
        }


    }


    return me;
}