// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    

    @property
    ID:string="";
    

   

    start ()
     {

    }
    

    onCollisionEnter(other:cc.Collider,self:cc.Collider)
     { 

      var otherNode=other.node;
      otherNode.position=this.node.position;

       if(other.node.name==this.ID)
       {
           console.log("correct");
           this.node.color=new cc.Color(99, 253, 136);
       }
       else
           { 
               console.log("notCorrect");
               this.node.color=new cc.Color(253, 100, 99);

           }
       
     }

     onCollisionExit(other:cc.Collider,self:cc.Collider)
     {
        this.node.color=new cc.Color(255, 255, 255);
              
     }

    
}
