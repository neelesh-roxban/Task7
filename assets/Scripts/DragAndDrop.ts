// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
//       -385 -330 -275 -220 -165 -110 -55  0  55 110 165 220 275 330 385



const {ccclass, property} = cc._decorator;


@ccclass
export default class NewClass extends cc.Component {

    

    @property
    mouseUp:boolean=false;
    @property
    mouseDown:boolean=false;
    @property
    Id:string="";
   
  
    
    onLoad()
    { 
      cc.director.getCollisionManager().enabled=true;
    }
update()
{
    this.mouseEvents();
}

mouseEvents()
{
    this.node.on(cc.Node.EventType.MOUSE_DOWN, this.MouseDown,this);
    this.node.on(cc.Node.EventType.MOUSE_MOVE,this.MouseMove,this);
    this.node.on(cc.Node.EventType.MOUSE_UP,this.MouseUp,this);
    this.node.on(cc.Node.EventType.MOUSE_LEAVE,this.MouseLeave,this);
}
    
 MouseDown(event)
  {
    this.mouseDown=true;          
  }

MouseMove(event)
  {
    if(this.mouseDown==true)
         {         
            let delta =event.getDelta();
           
             
            this.node.x=this.node.x+delta.x;
            this.node.y= this.node.y+delta.y;
           
                
         }  
  }

MouseUp()
  {                         
         
         this.mouseDown=false;        
         
         
  }

MouseLeave()
  {
    this.mouseDown=false;     

  }


      
}
