class calcController {
    
    constructor(){
        this._locale = 'pt-BR';
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#date");
        this._timeEl = document.querySelector("#time");
        this._currentDate;
        this.initialize();

    }

    initialize() {

        let interval = setInterval(()=>{

            this.displayDate = this.currentDate.toLocaleDateString(this._locale);
            this.displayTime = this.currentDate.toLocaleDateString(this._locale);

        }, 1000 );

        setTimeout(()=>{

            clearInterval(interval);


        }, 10000);
    
    }

    get displayTime(){
        return this._timeEl.innerHTML;

    }

    set displayTime(value){
        return this._timeEl.innerHTML = value;
    
    } 

    get displayDate(){
        return this._dateEl.innerHTML;

    }

    set displayDate(value){
        return this._dateEl.innerHTML = value;
    
    
    }

    get displayCalc(){
        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(value){
        this._displayCalcEl.innerHTML = value;

    }

    get currentDate(){
        return new Date();

    }

    set currentDate(value){
        this._currentDate.innerHTML = value;

    }
    
}