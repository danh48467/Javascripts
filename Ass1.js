function calculateBMI(){
    console.log('Begin')
    //Lấy kết quả Chiều cao và cân nặng
    var chieucao= document.getElementById('chieucao').value
    var cannang= document.getElementById('cannang').value
    console.log(cannang, chieucao)
    var BMI= cannang/((chieucao/100)*(chieucao/100))
    if(BMI<18.5){
        alert('Gầy, Nguy cơ phát bệnh: Thấp')
    }else if (BMI>18.5 && BMI<24.9){
    alert('Bình thường, Nguy cơ phát bệnh: Trung Bình')
    }else if(BMI>25 && BMI<29.9){
        alert('Hơi Béo, Nguy cơ phát bệnh: Cao')
    }else if(BMI>30 && BMI<34.9){
        alert('Béo phì cấp độ I, Nguy cơ phát bệnh: Cao')
    }else if(BMI>35 && BMI<39.9){
        alert('Béo phì cấp độ II, Nguy cơ phát bệnh: Rất Cao')
    }else if(BMI>40){
        alert('Béo phì cấp độ III, Nguy cơ phát bệnh: Nguy hiểm')
    }

}
