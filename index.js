const express = require('express');
const { status } = require('express/lib/response');
const connection = require('./dbconfig');

const app = express();

app.use(express.json());


//REST API TO GET ALL PRODUCTS FROM DATABASE
app.get('/getall', (req, res) => {
    const id = req.params.id;
    const getProductQuery = "SELECT p.*,sc.sub_category_name , c.category_name , ud.user_details_id , a.attribute_title FROM product_detail pd,product p,category c,sub_category sc , attribute a,product_duration_rate pdr,user_details ud WHERE a.id = pd.attribute_id AND p.id = pd.product_id AND pdr.id = p.product_duration_rate_id AND sc.id = p.subcategory_id AND ud.user_details_id = p.user_details_id"
    connection.query(getProductQuery , (error, result) => {
        if (error) {
            res.send('error to fetch prodduct all records due to ' + error)
        } else {
            res.send(result)
            res.status
        }
    })
});


//REST API TO GET ONE PRODUCT FROM DATABASE FROM PRODUCT DETAIL ID
app.get('/get-product/:id', (req, res) => {
    const id = req.params.id;
    const getProductQuery = "SELECT p.*,sc.sub_category_name , c.category_name , ud.user_details_id , a.attribute_title FROM product_detail pd,product p,category c,sub_category sc , attribute a,product_duration_rate pdr,user_details ud WHERE a.id = pd.attribute_id AND p.id = pd.product_id AND pdr.id = p.product_duration_rate_id AND sc.id = p.subcategory_id AND ud.user_details_id = p.user_details_id AND pd.productd_id = "
    connection.query(getProductQuery + id , (error, result) => {
        if (error) {
            res.send('error to fetch product all records due to ' + error)
        } else {
            res.send(result)
            res.status
        }
    })
});



app.listen(5001);