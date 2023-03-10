const express = require("express");
const app = express();
const port = 9000;

//chuyển req, res về json cho dễ thao tác
app.use(express.json());

app.get("/",(req, res) => {
    res.send("Hello world");
});

//danh mục tổng
app.get("/medicines", (req,res) => {
    res.send("Lấy danh mục thuốc");
});

//danh mục chi tiết
app.get("/medicines/:id", (req, res) => {
    const {id, ...params} = req.params;
    res.send("Lấy thông tin chi tiết thuốc " + id);
});

//thêm thuốc
app.post("/medicines", (req, res) => {
    const medicine = req.body;
    console.log(medicine);
    res.send("Thêm thuốc");
});

app.listen(port,() => console.log(`App listening at localhost:${port}`));