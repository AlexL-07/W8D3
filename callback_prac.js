class Clock {
    constructor(){
        this.date = new Date();
        this.hour = this.date.getHours();
        this.minute = this.date.getMinutes();
        this.second = this.date.getSeconds();
        this.printTime();
        setInterval(()=>this._tick(), 1000);
    }

    printTime(){
        console.log(`${this.hour}:${this.minute}:${this.second}`);
    }

    _tick(){
        this.second += 1;
        if (this.second === 60 ){
            this.minute += 1
            this.second = 0 
        }
        if (this.minute === 60 ){
            this.hour += 1
            this.minute = 0 
        }
        if (this.hour === 24 ){
            this.hour = 0
        }
        this.printTime();
    }
}

let clo = new Clock()
clo.printTime()