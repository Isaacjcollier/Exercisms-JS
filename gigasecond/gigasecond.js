var Gigasecond = function(date){
      this.startDate = date
}

Gigasecond.prototype.date = function (){
    var total = this.startDate.getTime() + 1000000000000
    var totalDate = new Date(total)
    return totalDate
}

module.exports = Gigasecond
