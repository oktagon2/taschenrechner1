class ZahlEingeben {
    constructor() {
        this.calculatorContext= undefined;
    }

    setCalculatorContext( calculatorContext) {
        this.calculatorContext= calculatorContext;
    }

    key1Pressed() {
        var displayValue= this.calculatorContext.getDisplayValue();
        if( displayValue< 100000) {
            displayValue= displayValue* 10+ 1;
        }
        this.calculatorContext.setDisplayValue( displayValue);
    }
}