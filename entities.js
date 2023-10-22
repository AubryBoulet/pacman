function initEntities(){
    player = new sprite({
        position: {
            x: 400 + Boundary.width*0.5,
            y: 800 + Boundary.height*0.5
        },
        velocity: {
            x: 0,
            y: 0
        },
        color: "yellow"
    })

    blinky = new ghost({
        position: {
            x: 400 + Boundary.width*0.5,
            y: 400 + Boundary.height*0.5
        },
        velocity:{
            x: 0,
            y: 0
        },
        color: "red",
        path:[]
    })
    pinky = new ghost({
        position: {
            x: 400 + Boundary.width*0.5,
            y: 520 + Boundary.height*0.5
        },
        velocity:{
            x: 0,
            y: 0
        },
        color: "pink",
        path:["up","up","up"]
    })
    clyde = new ghost({
        position: {
            x: 440 + Boundary.width*0.5,
            y: 520 + Boundary.height*0.5
        },
        velocity:{
            x: 0,
            y: 0
        },
        color: "orange",
        path:["up","down","up","down","up","down","up","down","up","down","up","left","up","up"]
    })
    inky = new ghost({
        position: {
            x: 360 + Boundary.width*0.5,
            y: 520 + Boundary.height*0.5
        },
        velocity:{
            x: 0,
            y: 0
        },
        color: "darkblue",
        path:["up","down","up","down","up","down","up","down","up","down","up","down","up","right","up","up"]
    })
}