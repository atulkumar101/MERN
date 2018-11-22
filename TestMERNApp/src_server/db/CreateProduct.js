var mongodb = require('mongodb');
const MongoClient=mongodb.MongoClient;

const URL = "mongodb://localhost:27017/";

MongoClient.connect(URL, function (err, db) {
    if(err) throw err;
    console.log('db', db);
    var dbo = db.db("E-Commerce");
    console.log('dbo', dbo);

    var prod = [
        {'name':'OnePlus 6T', 'price':37999, 'rating':5, 'category':'Mobile', 'quantity':50, 'img':'https://s3-ap-southeast-1.amazonaws.com/he-public-data/one6t7906568.jpg', 'desc':'OnePlus 6T (Mirror Black, 6GB RAM, 128GB Storage)'},
        {'name':'Samsung A8+', 'price':23990, 'rating':4, 'category':'Mobile', 'quantity':45, 'img':'https://s3-ap-southeast-1.amazonaws.com/he-public-data/samsung_a8481e548.jpg', 'desc':'Samsung Galaxy A8+ (Black, 6GB RAM, 64GB Storage)'},
        {'name':'Moto G6 Plus', 'price':17999, 'rating':3, 'category':'Mobile', 'quantity':20, 'img':'https://s3-ap-southeast-1.amazonaws.com/he-public-data/motog6c51436f.jpg', 'desc':'Moto G6 Plus (Indigo Black, 6+64 GB)'},
        {'name':'Redmi Y2', 'price':9499, 'rating':2, 'category':'Mobile', 'quantity':30, 'img':'https://s3-ap-southeast-1.amazonaws.com/he-public-data/mi_phone03725f4.jpg', 'desc':'Redmi Y2 (Gold, 3GB RAM, 32GB Storage)'},
        {'name':'MSI', 'price':59990, 'rating':5, 'category':'Laptop', 'quantity':72, 'img':'https://s3-ap-southeast-1.amazonaws.com/he-public-data/msi_gamingb7e78bd.jpg', 'desc':'MSI GF63 Intel Core i5 8th Gen 15.6-inch Gaming FHD Thin and Light Laptop (8GB/1TB HDD/Windows 10/4GB Graphics/Black/1.86 Kg), GF63 8RC- 211IN'},
        {'name':'Asus', 'price':52990, 'rating':4, 'category':'Laptop', 'quantity':45, 'img':'https://s3-ap-southeast-1.amazonaws.com/he-public-data/asus_gaming2730bbb.jpg', 'desc':'Asus Gaming FX570UD-E4168T 15.6-inch Laptop (8th Gen Intel Core i5-8250U Processor 1.6 GHz/8GB/1TB/Windows 10/GDDR5 4GB Graphics), Flame Red'},
        {'name':'Acer', 'price':49990, 'rating':3, 'category':'Laptop', 'quantity':43, 'img':'https://s3-ap-southeast-1.amazonaws.com/he-public-data/acer_gamingecbf788.jpg', 'desc':'Acer Nitro Ryzen 5 15.6-inch Gaming FHD Laptop (8GB/1TB HDD/Windows 10/4GB Graphics/Black/2.7 Kg), AN515-42'},
        {'name':'BPL', 'price':39990, 'rating':5, 'category':'Refrigerator', 'quantity':32, 'img':'https://s3-ap-southeast-1.amazonaws.com/he-public-data/bpl_wash9f1735f.jpg', 'desc':'BPL 564 L Frost Free Side-by-Side Refrigerator(BRS564H, Silver)'},
        {'name':'Whirlpool', 'price':16590, 'rating':4, 'category':'Refrigerator', 'quantity':44, 'img':'https://s3-ap-southeast-1.amazonaws.com/he-public-data/whirl_washc79051e.jpg', 'desc':'Whirlpool 215 L 4 Star Direct Cool Single Door Refrigerator(230 IMFRESH PRM 4S WINE TITANIUM(N)-E, Wine titanium)'},
        {'name':'Samsung', 'price':15590, 'rating':3, 'category':'Refrigerator', 'quantity':29, 'img':'https://s3-ap-southeast-1.amazonaws.com/he-public-data/samsung_ref503f515.jpg', 'desc':'Samsung 212 L 3 Star Direct Cool Single Door Refrigerator(RR22N3Y2ZS8/HL, RR22M2Y2ZS8/NL, Elegant Inox, Inverter Compressor)'},
        {'name':'Haier', 'price':11990, 'rating':2, 'category':'Refrigerator', 'quantity':76, 'img':'https://s3-ap-southeast-1.amazonaws.com/he-public-data/haier_ref024420d.jpg', 'desc':'Haier 195 L 4 Star Direct Cool Single Door Refrigerator(HED-20FDS, Brushed silver/Dazzle Steel)'},
        {'name':'IFB', 'price':25990, 'rating':5, 'category':'Washing Machine', 'quantity':38, 'img':'https://s3-ap-southeast-1.amazonaws.com/he-public-data/ifb_wash2ba4ff34.jpg', 'desc':'IFB 7 kg Fully-Automatic Front Loading Washing Machine (Serena Aqua SXA LDT, Silver)'},
        {'name':'Samsung', 'price':21900, 'rating':4, 'category':'Washing Machine', 'quantity':64, 'img':'https://s3-ap-southeast-1.amazonaws.com/he-public-data/samsung_washff7a876.jpg', 'desc':'Samsung 6.5 kg Fully-Automatic Top Loading Washing Machine (WA65M4020HP/TL, Magnolia Plum)'},
        {'name':'IFB', 'price':19990, 'rating':3, 'category':'Washing Machine', 'quantity':26, 'img':'https://s3-ap-southeast-1.amazonaws.com/he-public-data/ifb_wash8e79fba.jpg', 'desc':'IFB 6 kg Fully-Automatic Front Loading Washing Machine (Diva Aqua SX, Silver)'},
        {'name':'Samsung', 'price':29990, 'rating':5, 'category':'TV', 'quantity':17, 'img':'https://s3-ap-southeast-1.amazonaws.com/he-public-data/samsung_tve1d6108.jpg','desc':'Samsung 108 cm (43 inches) 5 Series Full HD LED TV 43N5002 (Black)'},
        {'name':'Micromax', 'price':10490, 'rating':4, 'category':'TV', 'quantity':32, 'img':'https://s3-ap-southeast-1.amazonaws.com/he-public-data/mmx_4390b0d21.jpg', 'desc':'Micromax 81 cm (32 inches) HD Ready LED TV 32T8361HD/32T8352D (Black)'},
        {'name':'Echo Dot', 'price':2999, 'rating':5, 'category':'Speaker', 'quantity':40, 'img':'https://s3-ap-southeast-1.amazonaws.com/he-public-data/echo_dotec440e9.jpg', 'desc':'All-new Echo Dot (3rd Gen) - Smart speaker with Alexa (Black)'},
        {'name':'JBL', 'price':1399, 'rating':4, 'category':'Speaker', 'quantity':30, 'img':'https://s3-ap-southeast-1.amazonaws.com/he-public-data/jbl_go8d9bc66.jpg', 'desc':'JBL GO Portable Wireless Bluetooth Speaker with Mic (Black)'},
        {'name':'boAT', 'price':899, 'rating':3, 'category':'Speaker', 'quantity':37, 'img':'https://s3-ap-southeast-1.amazonaws.com/he-public-data/boatc0c886a.jpg', 'desc':'boAt Stone 200 Portable Bluetooth Speakers (Black)'},
        {'name':'Nikon', 'price':32990, 'rating':5, 'category':'Camera', 'quantity':37, 'img':'https://s3-ap-southeast-1.amazonaws.com/he-public-data/nikonfb6a018.jpg', 'desc':'Nikon D5300 24.2MP Digital SLR Camera (Black) with AF-P 18-55mm f/ 3.5-5.6g VR Kit Lens, 16GB Card and Camera Bag'},
        {'name':'Canon', 'price':27990, 'rating':4, 'category':'Camera', 'quantity':35, 'img':'https://s3-ap-southeast-1.amazonaws.com/he-public-data/canon_camafb07f6.jpg', 'desc':'Canon EOS 1500D Digital SLR Camera (Black) with EF S18-55 is II Lens/Camera Case'},
        {'name':'Sennheiser', 'price':5989, 'rating':5, 'category':'Headphones', 'quantity':23, 'img':'https://s3-ap-southeast-1.amazonaws.com/he-public-data/senn_head603dca9.jpg', 'desc':'Sennheiser HD 4.40-BT Bluetooth Headphones (Black)'},
        {'name':'boAT', 'price':1499, 'rating':4, 'category':'Headphones', 'quantity':27, 'img':'https://s3-ap-southeast-1.amazonaws.com/he-public-data/boat_head32bb123.jpg', 'desc':'boAt Rockerz 510 Wireless Bluetooth Headphones (Black)'},
        {'name':'Philips', 'price':3799, 'rating':5, 'category':'Shaver', 'quantity':67, 'img':'https://s3-ap-southeast-1.amazonaws.com/he-public-data/philips_1ea1597c.jpg', 'desc':'Philips S5050/06 Aquatouch Electric Shaver'},
        {'name':'Philips', 'price':1399, 'rating':4, 'category':'Shaver', 'quantity':29, 'img':'https://s3-ap-southeast-1.amazonaws.com/he-public-data/phillips_3d7f0581.jpg', 'desc':'Philips S1030/04 Wet and Dry Electric Shaver (Black)'},
        {'name':'Philips', 'price':1699, 'rating':5, 'category':'Trimmer', 'quantity':25, 'img':'https://s3-ap-southeast-1.amazonaws.com/he-public-data/philips_2a0e6bdf.jpg', 'desc':'Philips Beard Trimmer Cordless and Corded for Men QT4011/15'},
        {'name':'Maxelnova', 'price':339, 'rating':4, 'category':'Trimmer', 'quantity':42, 'img':'https://s3-ap-southeast-1.amazonaws.com/he-public-data/max_shave4b64e98.jpg', 'desc':'Maxelnova 8801 Trimmer For Men (Color May Vary)'},
        {'name':'Mi Band 3', 'price':1998, 'rating':5, 'category':'Band', 'quantity':80, 'img':'https://s3-ap-southeast-1.amazonaws.com/he-public-data/mi_band3fcc3d32.jpg', 'desc':'Mi Band 3 (Black)'},
        {'name':'Kindle', 'price':8799, 'rating':5, 'category':'Kindle', 'quantity':76, 'img':'https://s3-ap-southeast-1.amazonaws.com/he-public-data/kin_pap690b6c0.jpg', 'desc':'Kindle Paperwhite (7th gen), 6" High Resolution Display with Built-in Light, 4GB, Wi-Fi'},
        {'name':'Amazon', 'price':3499, 'rating':5, 'category':'Fire TV', 'quantity':74, 'img':'https://s3-ap-southeast-1.amazonaws.com/he-public-data/firestick78b67b4.jpg', 'desc':'Amazon Fire TV Stick with Voice Remote'},
    ];

    dbo.collection("products").insertMany(prod,function(err,res) {
        if(err) throw err;
        console.log("many document inserted: "+res.insertedCount);
        console.log(res.result,"ok:1,n:14");
        console.log(res.ops,"name: address: _id:");
        console.log(res.insertedCount);
        console.log(res.insertedIds,'[]');
    });

    dbo.collection("Product").find({},{_id: 0, name: 1}).toArray(function(err,res){
        if(err) throw err;
        console.log(res);
    });

    db.close();
});













