var system=new Flora.FloraSystem;
system.start(function(){Flora.world.update({c:0,showStats:!1,gravity:Flora.PVector.create(0,0),style:{backgroundImage:"-webkit-radial-gradient(circle, #444, #000)"}});var b=new Flora.Walker({isPerlin:!0,perlinTime:Flora.Utils.getRandomNumber(0,1E4),wrapEdges:!0,maxSpeed:20,opacity:0.95,color:{r:255,g:150,b:150}}),d=new Flora.Walker({isPerlin:!0,perlinTime:Flora.Utils.getRandomNumber(0,1E4),wrapEdges:!0,maxSpeed:20,opacity:0.95,color:{r:255,g:150,b:255}}),g=[b,d];new Flora.ParticleSystem({parent:b,burst:1,
particle:function(){var a=Flora.Utils.clone(b.getVelocity());a.normalize();a?a.mult(-1):a=Flora.PVector.create(0,0);return{parent:this,location:this.getLocation(),acceleration:a,lifespan:10,checkEdges:!1,width:3,height:3,color:{r:200,g:200,b:200}}}});new Flora.ParticleSystem({parent:d,burst:1,particle:function(){var a=Flora.Utils.clone(b.getVelocity());a.normalize();a?a.mult(-1):a=Flora.PVector.create(0,0);return{parent:this,location:this.getLocation(),acceleration:a,lifespan:10,checkEdges:!1,width:3,
height:3,color:{r:200,g:200,b:200}}}});for(var h=["rgb(255, 125, 125)","rgb(255, 125, 255)"],d=function(){return this.myParticleLifespan},i=function(){var a=this.getMyParticleLifespan(),c=Flora.Utils.clone(this.getVelocity()),b=h[this.myIndex];c.normalize();c?c.mult(-Flora.Utils.map(a,8,12,10,20)):c=Flora.PVector.create(0,0);return{parent:this,location:this.getLocation(),acceleration:c,lifespan:a,border:"10px solid "+b,borderRadius:"100%",boxShadow:"1px 1px 20px 20px rgba(255, 255, 255, .5)"}},e=
0;e<0.0040*Flora.world.width;e+=1){var f=0===e%2?0:1;new Flora.ParticleSystem({myIndex:f,location:Flora.PVector.create(Flora.Utils.getRandomNumber(0,Flora.world.width),Flora.Utils.getRandomNumber(0,Flora.world.height)),flocking:!0,maxSteeringForce:1,separateStrength:1,alignStrength:0.5,cohesionStrength:1,width:20,height:20,target:g[f],burst:1,lifespan:-1,mass:Flora.Utils.getRandomNumber(2,12),myParticleLifespan:Flora.Utils.getRandomNumber(8,12),getMyParticleLifespan:d,particle:i})}});
