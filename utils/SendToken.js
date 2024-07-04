exports.sendtoken = (student,statuscode,res)=>{
   
    const token = student.getjwttoken();

    const options = {
        exipres:new Date(Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
        httpOnly:true,
        // jab https par chalyege tab kar denge secure true
        secure:true 
    }

      
    res.status(statuscode).cookie("token", token , options).json({success:true, id:student._id , token})
   

}