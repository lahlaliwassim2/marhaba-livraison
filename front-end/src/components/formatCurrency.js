const CURRENCY_FORMATE = new Intl.NumberFormat(undefined , {
    currency:"USD",
    style:"currency"
});
const formatCurrency = (number)=>{
    return CURRENCY_FORMATE.format(number)
}

export default formatCurrency