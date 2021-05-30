let list = [7, 23, 42, 36, 50, 20]
let Biggest_Number = 0
for (let index = 0; index <= list.length - 1; index++) {
    if (list[index] > Biggest_Number) {
        Biggest_Number = list[index]
    }
}
serial.writeValue("biggest number is", Biggest_Number)
