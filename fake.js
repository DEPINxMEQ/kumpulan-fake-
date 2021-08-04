//Kumpulan fake 😑 by dinata
const ftoko = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": fs.readFileSync('./gambar/din.jpeg') //Gambarnye
					},
					"title": "din-Fakereply", //Kasih namalu 
					"description": "SELF BOT", 
					"currencyCode": "USD",
					"priceAmount1000": "2000",
					"retailerId": "Ardy",
					"productImageCount": 1
				},
				    "businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
//FAKEREPLY TROLI
const ftroli = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 1,
                            status: 1,
                            surface : 1,
                            message: 'dinata', //Kasih namalu hedeh 
                            orderTitle: 'Bang',
                            thumbnail: fs.readFileSync('./src/din.jpeg'), //Gambarnye
                            sellerJid: '0@s.whatsapp.net'
          
                          }
                        }
                      }
//FAKEREPLY LOCATION
const flokasi = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    locationMessage: {
                    name: 'Russia',
                    jpegThumbnail: fs.readFileSync('./src/din.jpeg')
                          }
                        }
                      }
//FAKEREPLY DOCUMENT
const fdocs = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    documentMessage: {
                    title: 'Halo bang', 
                    jpegThumbnail: fs.readFileSync('./src/din.jpeg')
                          }
                        }
                      }
//FAKEREPLY VIDEO
const fvideo = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title":"hallo bang",
                 "h": `Hmm`,
                 'seconds': '99999', 
                 'caption': 'Halo bang',
                 'jpegThumbnail': fs.readFileSync('./src/din.jpeg')
                        }
                       }
	                  }
//FAKEREPLY GROUPINVITE
const fgclink = {
	"key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "6288213840883-1616169743@g.us",
			"inviteCode": "mememteeeekkeke",
			"groupName": "P", 
            "caption": "Halo bang jagoo", 
            'jpegThumbnail': fs.readFileSync('./src/din.jpeg')
		}
	}
}
//FAKEREPLY GIF
const fgif = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title":"hallo bang",
                 "h": `Hmm`,
                 'seconds': '99999', 
                 'gifPlayback': 'true', 
                 'caption': 'Halo bang',
                 'jpegThumbnail': fs.readFileSync('./src/din.jpeg')
                        }
                       }
	                  } 
//FAKEREPLY TEXT WITH THUMBNAIL
const ftextt = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text":"hallo bang",
                 "title": `Hmm`,
                 'jpegThumbnail': fs.readFileSync('./src/din.jpeg')
                        }
	                  } 
                     }
//FAKEREPLY VN
const fvn = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
		"audioMessage": {
                 "mimetype":"audio/ogg; codecs=opus",
                 "seconds": "${second}",
                 "ptt": "true"
                        }
	                  } 
                     }