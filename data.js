let categories = ["Venues","Flowers","Cars","Makeup Artists","Beauty Salons","Photographers","Dresses","Suits","Honeymoon"]

let providers = {
    provider1 : {
        name : "Noor's company",
        phone_no: "+962795478415",
        location: "Irbid",
        email: "nooromari@gmail.com"
    },
    provider2 : {
        name : "Tala's company",
        phone_no: "+962791234567",
        location: "Amman",
        email: "tala.hajeer@gmail.com"
    }
}

let services_venues = {
    venue1 :{
        category: "venue",
        title:"View",
        provider: providers.provider1,
        min_price: 1000,
        max_price: 10000,
        descrption : "A venue located by the sea with amazing view and capacity of 100 guests",
        images_path: ["/img/wedding-venues-feature.png","/img/sea-venue.jpg"]
    },
    venue2 :{
        category: "venue",
        title:"White",
        provider: providers.provider2,
        min_price: 3000,
        max_price: 15000,
        descrption : "A venue located at Airport road with capacity of 150 guests",
        images_path: ["/img/Fitroy+wedding+venue.jpg"]
    }
}

module.exports = categories;