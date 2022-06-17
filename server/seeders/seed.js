const db = require("../config/connection");
const { Profile, Event, Location } = require("../models");

db.once("open", async () => {
  try {
    await Location.deleteMany();

    const locations = await Location.insertMany([
      { name: "UK" },
      { name: "Europe" },
      { name: "Asia" },
      { name: "Americas" },
      { name: "Far-East" },
      { name: "Africa" },
    ]);

    console.log("locations seeded");

    await Profile.deleteMany({});

    const profile = await Profile.create([
      {
        name: "Nadine",
        email: "nadine@eventech.dev",
        password: "password",
      },
      {
        name: "Rizwan",
        email: "rizwan@eventech.dev",
        password: "password",
      },
      {
        name: "Joe",
        email: "joe@eventech.dev",
        password: "password",
      },
      {
        name: "Anna",
        email: "anna@eventech.dev",
        password: "password",
      },
      {
        name: "Marc",
        email: "marc@eventech.dev",
        password: "password",
      },

      {
        name: "Mike",
        email: "mike@eventech.dev",
        password: "password",
      },
      {
        name: "Andrew",
        email: "andrew@eventech.dev",
        password: "password",
      },
      {
        name: "Katie",
        email: "katie@eventech.dev",
        password: "password",
      },
      {
        name: "Daniel",
        email: "daniel@eventech.dev",
        password: "password",
      },
      {
        name: "Peter",
        email: "peter@eventech.dev",
        password: "password",
      },
      {
        name: "Julie",
        email: "julie@eventech.dev",
        password: "password",
      },
      {
        name: "Philip",
        email: "philip@eventech.dev",
        password: "password",
      },
      {
        name: "Paul",
        email: "paul@eventech.dev",
        password: "password",
      },
      {
        name: "Ryan",
        email: "ryan@eventech.dev",
        password: "password",
      },
      {
        name: "Alex",
        email: "alex@eventech.dev",
        password: "password",
      },
      {
        name: "Adam",
        email: "adam@eventech.dev",
        password: "password",
      },
      {
        name: "Brian",
        email: "brian@eventech.dev",
        password: "password",
      },
      {
        name: "Frank",
        email: "frank@eventech.dev",
        password: "password",
      },
      {
        name: "Emma",
        email: "emma@eventech.dev",
        password: "password",
      },
      {
        name: "Jessica",
        email: "jessica@eventech.dev",
        password: "password",
      },
      {
        name: "Edward",
        email: "edward@eventech.dev",
        password: "password",
      },
      {
        name: "Ben",
        email: "ben@eventech.dev",
        password: "password",
      },
      {
        name: "Stephanie",
        email: "steph@eventech.dev",
        password: "password",
      },
      {
        name: "David",
        email: "david@eventech.dev",
        password: "password",
      },
      {
        name: "Donald",
        email: "donald@eventech.dev",
        password: "password",
      },
      {
        name: "Lernantino",
        email: "lernantino@eventech.dev",
        password: "password",
      },
    ]);

    await Event.deleteMany();

    const events = await Event.insertMany([
      {
        title: "Datacloud Global Congress",
        description:
          "Datacloud Global Congress attracts circa 2,000 executives from the data centre and cloud industries, and not just because of the location.",
        whyattend:
          "Keynotes, panels and roundtables covering a wide number of brand new topics reflecting current trends and market outlook.",
        image: "datacloud.jpeg",
        link: "https://events.broad-group.com/event/a4ba77f1-52e2-4570-a6f5-d442cd3eca93/summary",
        location: locations[1]._id,
        price: 260,
        comments: [
          {
            body: "I’ve just spent the day at the Datacloud event, and I can’t say I enjoyed it very much. I tried my best to meet new people and build my network, but everyone was just so busy. The event was packed full and there were not many places to sit and have a break! ",
            author: profile[10].name
          },
          {
            body: "Such a huge venue with so much going on! Great guest speakers and opportunities to meet people. The only thing I would say is that you need the whole day to get around here!",
            author: profile[18].name
          },
          {
            body: "Fantastic, I went to this event to broaden my knowledge about the jobs market with the intention to meet people and grow my network! I managed to hand out my CV to quite a lot of people which was great! ",
            author: profile[6].name
          },
          {
            body: "Wow, this was a great experience, the location is amazing, and the conference does not disappoint! I will be going again next year!",
            author: profile[3].name
          },
          {
            body: "The event really lives up to the hype!",
            author: profile[23].name
          },
          {
            body: "A great place to network and meet a lot of very knowledgeable tech minds!",
            author: profile[13].name
          },
          {
            body: "One of the best Technology conferences I’ve been to in a long time!",
            author: profile[5].name
          },
        ],
      },
      {
        title: "ISE 2022",
        description:
          "ISE is the world's top AV and systems integration conference, where the industry's best and brightest showcase their latest solutions.",
        whyattend:
          "Three days of keynotes, seminars and seminars covering the application of AV technology in industries from hospitality and smart homes to retail, live events and more.",
        image: "europe.png",
        link: "https://www.iseurope.org/location-and-opening-hours/",
        location: locations[1]._id,
        price: 500,
        comments: [
          {
            body: "I go to the ISE event every year; I am one of the exhibitors and love sharing my knowledge and experiences with people who are interested in learning more about the technical field.",
            author: profile[11].name
          },
          {
            body: "A great range of stands and people of different backgrounds and skillsets and overall, a pleasant experience! ",
            author: profile[8].name
          },
          {
            body: "Highly recommended I will definitely be going here again next year!",
            author: profile[16].name
          },
          {
            body: "Wow, this was a great experience, the location is amazing, and the conference does not disappoint! I will be going again next year!",
            author: profile[3].name
          },
          {
            body: "One of the best Technology conferences I’ve been to in a long time!",
            author: profile[15].name
          },
        ],
      },
      {
        title: "Technology & Services World",
        location: locations[3]._id,
        description:
          "Technology & Services World (TSW) is an immersive learning and networking experience, held by The Technology & Services Industry Association (TSIA).",
        whyattend:
          "As new business challenges arise and the economy shifts, TSW delivers relevant technology services, sales, channel optimization and product content that will help attendees navigate the changes.",
        image: "tsia.png",
        link: "https://www.tsia.com/conference-pricing",
        price: 250,
        comments: [
          {
            body: "I’ve been to a number of TSIA events in different locations, and I must say this one has been my favourite! ",
            author: profile[1].name
          },
          {
            body: "I’ve just spent the day at the TSIA event, and I can’t say I enjoyed it very much. I tried my best to meet new people and build my network, but everyone was just so busy. The event was packed full and there were not many places to sit and have a break! ",
            author: profile[20].name
          },
          {
            body: "Highly recommended I will definitely be going here again next year!",
            author: profile[6].name
          },
          {
            body: "Wow, this was a great experience, the location is amazing, and the conference does not disappoint! I will be going again next year!",
            author: profile[13].name
          },
        ],
      },
      {
        title: "Computex 2022",
        location: locations[4]._id,
        description:
          "Computex is one of the largest technology events in the APAC region, with a particular focus on computing. ",
        whyattend:
          "The focus of Computex 2022 will be on innovative computing, accelerating intelligence, digital resilience, connected X-Experience, innovations and startups, and sustainability. Expect big announcement from Intel, AMD, Nvidia and the other semiconductor giants.",
        image: "computex.jpg",
        link: "https://computex.net/",
        price: 390,
        comments: [
          {
            body: "A great event! Lots to do and free access is a bonus!",
            author: profile[19].name
          },
          {
            body: "We really benefited going to the Computex event, easy access and a great range of services on offer!",
            author: profile[2].name
          },
          {
            body: "Highly recommended I will definitely be going here again next year!",
            author: profile[6].name
          },
          {
            body: "Wow, this was a great experience, the location is amazing, and the conference does not disappoint! I will be going again next year!",
            author: profile[13].name
          },
        ],
      },
      {
        title: "RSA Conference 2022",
        location: locations[3]._id,
        link: "https://www.rsaconference.com/usa/passes-and-rates?_ga=2.140655930.909013570.1655140944-1356203035.1655140944",
        description:
          "RSA Conference is a long-running event that brings the world's leading cybersecurity professionals under one roof.",
        whyattend:
          "Hear from industry leaders on how to place resilience at the forefront of your cyber strategy and prepare for security challenges of the new normal.",
        image: "rsa.jpeg",
        price: 270,
        comments: [
          {
            body: "A great event! Lots to do and free access is a bonus!",
            author: profile[9].name
          },
          {
            body: "We really benefited going to the RSA event, easy access and a great range of services on offer!",
            author: profile[12].name
          },
          {
            body: "I thought it was very informative!",
            author: profile[16].name
          },
          {
            body: "This event was very interesting with a great panel of speakers.",
            author: profile[3].name
          },
        ],
      },
      {
        title: "London Tech Week",
        location: locations[0]._id,
        link: "https://londontechweek.com/registration/",
        description:
          "London Tech Week is a week-long celebration of technology innovation, housing various different technology-specific shows.",
        whyattend:
          "At London Tech Week, there's something for everyone, with events on topics from AI and 5G to quantum computing, the future of work and more.",
        image: "london-tech-week.png",
        price: 480,
        comments: [
          {
            body: "One of the best Technology conferences I’ve been to in a long time!",
            author: profile[17].name
          },
          {
            body: "It’s great, easy to get to and the event has lots to offer – highly recommend!!",
            author: profile[12].name
          },
          {
            body: "This event was very interesting with a great panel of speakers.",
            author: profile[3].name
          },
        ],
      },
      {
        title: "Dublin Tech Summit",
        location: locations[0]._id,
        link: "https://dublintechsummit.tech/dts-live-tickets/?utm_campaign=WG+-+Search+-+Brand+-+UK+-+BMM&utm_medium=ppc&utm_source=adwords&utm_term=dublin%20tech%20summit&hsa_acc=8160713141&hsa_ver=3&hsa_kw=dublin%20tech%20summit&hsa_net=adwords&hsa_ad=421806371704&hsa_tgt=kwd-297591758102&hsa_grp=100188825547&hsa_mt=b&hsa_src=g&hsa_cam=9525410373&gclid=Cj0KCQjwwJuVBhCAARIsAOPwGAS_joxjB8yM1nPwCeXBp2e6Tpitsb8OVqQc12-NgXyRlZ9RSYLhWW4aArKREALw_wcB",
        description:
          "Dublin Tech Summit Virtual will gather the most influential minds in tech and business from across the globe.",
        whyattend:
          " Hear from 200+ speakers and connect with 8,000 fellow attendees from 60+ countries. There will be more than 80 conference sessions across four stages, covering topics such as space tech, emerging tech, growth and much more!",
        image: "dublin.png",
        price: 455,
        comments: [
          {
            body: "This event has really grown and improved from when I went a few years ago! ",
            author: profile[7].name
          },
          {
            body: "If you are thinking of going, then I would definitely advise you to give it a go! I managed to meet lots of people and I even secured a few job interviews!",
            author: profile[17].name
          },
          {
            body: "Enjoyable, educational and lots of freebies, what’s not to love! See you again next year!",
            author: profile[22].name
          },
        ],
      },
      {
        title: "Cloudflare Connect",
        location: locations[0]._id,
        link: "https://www.cloudflare.com/pg-lp/free-fast-secure-dns/?&_bt=601494744645&_bk=cf%20dns&_bm=b&_bn=g&_bg=136911167506&_placement=&_target=&_loc=1006884&_dv=c&awsearchcpc=1&gclid=Cj0KCQjwwJuVBhCAARIsAOPwGAQpLvpjICrDdBFh5z9FsDP72LoKRoXNBsOh9j6IXmGk3O_SGOGrEr4aAgRREALw_wcB&gclsrc=aw.ds",
        description:
          "Cloudflare Connect brings together the experts driving network and security transformation to discuss what's next in the space.",
        whyattend:
          " Keynotes and learning sessions from special guests, demos, hands-on labs, and real-world use cases. There will be exclusive breakout rooms for in-person attendees, with keynote sessions available to attend virtually for free. In addition to cybersecurity and digital network experts, speakers will include Cloudflare’s CTO, John Graham-Cumming.",
        image: "cloudfare.jpg",
        price: 375,
        comments: [
          {
            body: "Very informative but a little boring – the event lacked the excitement, maybe I was expecting too much?",
            author: profile[5].name
          },
          {
            body: "An education event with no fuss! A great environment and lots of interesting people to talk to!",
            author: profile[6].name
          },
          {
            body: "It wasn’t for me, I found it difficult to talk to people and get the answers that I was looking for. ",
            author: profile[9].name
          },
        ],
      },
      {
        title: "Infosecurity Europe",
        location: locations[1]._id,
        link: "https://www.iseurope.org/location-and-opening-hours/",
        description:
          "Infosecurity Europe is up there with the largest and most well-regarded cybersecurity conferences in the calendar.",
        whyattend:
          "In an industry characterised by constant change, it's vital to keep abreast of all the latest developments. Infosecurity Europe is designed to help you do just that.",
        image: "is.jpg",
        price: 460,
        comments: [
          {
            body: "This was amazing! So much on offer and really cool people to meet! I’ve just finished University and it was very confident inspiring to see others doing so well in this field. I gained some great advice from the people I met!",
            author: profile[9].name
          },
          {
            body: "A great event, friendly people who are happy to speak to you and so much to learn! I highly recommend this to anyone who is thinking about going!",
            author: profile[10].name
          },
          {
            body: "It wasn’t for me, I found it difficult to talk to people and get the answers that I was looking for. ",
            author: profile[11].name
          },
        ],
      },
      {
        title: "Black Hat USA 2022",
        link: "https://www.blackhat.com/us-22/registration.html",
        location: locations[3]._id,
        description:
          "Black Hat is a long-running and highly technical show for security professionals.",
        whyattend:
          "Receive the latest information in security research, development and trends in a strictly vendor-neutral environment.",
        image: "black-hat.png",
        price: 290,
        comments: [
          {
            body: "The event was not what I was expecting, I am not sure if I would go again – I wish there were more stands, and it could have lasted longer.",
            author: profile[19].name
          },
          {
            body: "I agree with the comment above about it being too short, but I did benefit from the people that I met!",
            author: profile[18].name
          },
          {
            body: "It wasn’t for me, I found it difficult to talk to people and get the answers that I was looking for. ",
            author: profile[14].name
          },
        ],
      },
      {
        title: "IFA Berlin",
        location: locations[1]._id,
        link: "https://b2b.ifa-berlin.com/en/trade-visitors/ticketing-services/",
        description:
          "IFA is Europe's biggest technology showcase, held in September every year in Berlin and attended by most of the major players in the industry.",
        whyattend:
          "With many businesses avoiding the show last year due to the pandemic, it's possible IFA 2022 will yield a bumper crop of amazing and wacky tech.",
        image: "berlin.jpg",
        price: 590,
        comments: [
          {
            body: "Fantastic, I went to this event to broaden my knowledge about the jobs market with the intention to meet people and grow my network! I managed to hand out my CV to quite a lot of people which was great!",
            author: profile[9].name
          },
          {
            body: "I went to this event after being recommended it from a few colleagues at work. I am glad to say it was a great event and I thoroughly enjoyed meeting like-minded people.",
            author: profile[18].name
          },
        ],
      },
      {
        title: "GITEX Global",
        location: locations[2]._id,
        link: "https://www.gitex.com/why-visit",
        description:
          "The Middle East's largest show for the technology industry that brings together thought-leaders, creators, innovators and makers to discuss, debate and challenge new ideology, showcase new products and identify future opportunities",
        whyattend:
          "You'll get access to conference programmes with over 1000 expert speakers, 4000 exhibitors and more than 200 government entities from 170 countries.",
        image: "gitex.png",
        price: 350,
        comments: [
          {
            body: "Wow, what can I say surely the biggest and most impressive event I have been to! Dubai does not disappoint, the effort that the organisers have put it is amazing. Lots to learn, see and experience!",
            author: profile[10].name
          },
          {
            body: "Such a huge venue with so much going on! Great guest speakers and opportunities to meet people. The only thing I would say is that you need the whole day to get around here!",
            author: profile[15].name
          },
          {
            body: "GITEX Dubai – 5-star event with great stands and amazing visuals! The event is huge and difficult to experience everything in one day so I would advise to plan well before arrival!",
            author: profile[1].name
          },
        ],
      },

      {
        title: "Web Summit Lisbon",
        location: locations[1]._id,
        description:
          "We’re a company from Dublin, Ireland, that holds events across the world: Web Summit in Lisbon, Web Summit Rio in Rio de Janeiro, Collision in Toronto, and RISE in Hong Kong.",
        whyattend:
          "Web Summit 2022 will bring together 70,000+ people, and the companies redefining the tech industry.",
        image: "web-summit-lisbon.jpeg",
        link: "https://websummit.com/tickets/attendees",
        price: 495,
        comments: [
            {
                body:"The best technology conference on the planet according to Forbes and I agree! It waa great!",
                author: profile[1].name
            },
            {
                body:"This show is THE place to be for all things #eventech. Highly recommended for exhibitors in the industry and attendees looking for the latest and greatest in event technology.",
                author: profile[11].name
        },
        ],
      },
      {
        title: "Event Technology Live",
        location: locations[0]._id,
        description:
          "The World's Leading Event Technology Expos - London to Las Vegas",
        whyattend:
          "Event Technology Live is the only event portfolio dedicated to event technology that showcases digital, in-person and hybrid events.",
        image: "event-tech-live.png",
        link: "https://eventtechlive.com/membership-selection/",
        price: 150,
        comments: [
            {
                body:"It was very interesting, hope I can make it again next year",
                author: profile[9].name
           
            },
            {
                body:"Friendly and helpful professionals who are happy to share their knowledge and experiences. It really benefited me!",
                author: profile[15].name
          
        },
        ],
      },
      {
        title: "OpenText World EMEA",
        location: locations[2]._id,
        description:
          "In a world of accelerated change and new ways for modern work, businesses rely on information management to stay ahead. Join us at OpenText World EMEA 2022 to discover more efficient, collaborative, and innovative solutions to solve today’s business challenges.",
        whyattend:
          "At OpenText, we obsess over driving innovation that can help you power and protect information across employees, customers, suppliers, and partners. That is why we’re here to help you discover how you can gain an information advantage.",
        image: "opentext.jpeg",
        link: "https://www.opentextworld.com/event/65ea7cf3-e6bc-4067-9b43-377cacc15d69/register?RefId=FY22-OTW-EMEA-PPC-textad-v2&gclid=CjwKCAjwqauVBhBGEiwAXOepkUS7z3j2I8MTXPdaXaguoYuCc8Y0LhKbVoTRAWB-c1y5a0MAVLxIUxoC58oQAvD_BwE",
        price: 195,
        comments: [
            {
                body:"This conference could have been more interesting, the speaker panel was not great and I found myself wondering what I could gain from the event.",
                author: profile[19].name
              
            },
            {
                body:"Very enjoyable and a productive day out!",
                author: profile[20].name
     
        },
        ],
      },
      {
        title: "IDC CIO Summit Bahrain",
        location: locations[2]._id,
        description:
          "The IDC CIO Summit 2022 will explore Bahrain's changing technology landscape and present strategies that will help organizations evolve into digitally resilient enterprises and secure their rightful place in the 'Next Normal'.",
        whyattend:
          "The Bahrain CIO Summit 2022 features a tailored agenda filled with handpicked topics, discussions, panel sessions, and keynote presentations from regional and global technology experts that will explore all of today's hottest ICT issues.",
        image: "bahrain.jpeg",
        link: "https://www.idc.com/mea/events/upcoming-events",
        price: 275,
        comments: [
            {
                body:"A great eye opener and insight into future developments",
                author: profile[8].name
             
            },
            {
                body:"It was a fantastic event to network and meet like minded professionals in the same field!",
                author: profile[18].name
      
            },
            {
                body:"I decided to come here last minute and I am glad I did. The event has a lot to offer!",
               author: profile[16].name
           
        },
        ],
      },
      {
        title: "VMware Egypt Summit",
        location: locations[2]._id,
        description:
          "Organizations across the country are embracing a digital-first approach in line with 'Digital Egypt', an all-encompassing vision and plan that lays the foundations for the transformation of Egypt into a digital society. ",
        whyattend:
          "This event will feature insights from IDC and VMware experts as they discuss how Egypt's organizations can benefit from the flexibility of a multicloud strategy, gain greater control over all their clouds, and advance toward their digital business goals while streamlining operations and maintaining enterprise control.",
        image: "egyptian-pyramids-hero.jpeg",
        link: "https://meaevents.idc.com/event/4d189ecf-2f04-4e6b-b409-5e59ebf0f458/regProcessStep1",
        price: 175,
        comments: [
            {
                body:"Very knowledgeable speaking panel, I will attend again next year to see how plans are progressing",
                author: profile[0].name
       
            },
            {
                body:"It was a great event, this is the third time I have been!",
                author: profile[1].name
            },
            {
                body:"As a domestic resident it is very exciting to see the technological plans being discussed for my country and worldwide development!",
                author: profile[2].name
        },
        ],
      },
      {
        title: "IDC West Africa CIO Summit 2022",
        location: locations[5]._id,
        description:
          "The IDC West Africa CIO Summit 2022 will explore the country's changing technology landscape and present strategies that will help organizations evolve into digitally resilient enterprises and secure their rightful place in the 'Next Normal'.",
        whyattend:
          "The IDC West Africa CIO Summit 2022 features a tailored agenda filled with handpicked topics, discussions, panel sessions, and keynote presentations from regional and global technology experts that will explore all of today's hottest ICT issues.",
        image: "idc-west-africa.jpeg",
        link: "https://www.idc.com/mea/events/69468-idc-west-africa-cio-summit-2022/proceedings",
        price: 350,
        comments: [
            {
                body:"I have partnered with many tech events globally, by far this is my favorite!",
                author: profile[4].name
            },
            {
                body:"The event has a lot to offer and never dissapoints!",
                author: profile[5].name
            },
            {
                body:"Last year I attended as a guest speaking to people to learn more about the field and this year I am hosting my own stand and looking forward to helping others!",
                author: profile[6].name,
        },
        ],
      },
      {
        title: "SiGMA Americas - Sao Paulo",
        location: locations[3]._id,
        description:
          "SiGMA Americas is heading to the buzzing metropolis of Sao Paolo in Brazil for the next edition of our world-renowned show, this time combining both the gaming and emerging tech industries under one roof. The event will take place on 13th – 14th September 2022 at the beautiful Tivoli Hotel.",
        whyattend:
          "As the fastest growing gaming market in the world, Latin America is the ideal backdrop for our bustling expo floor where the leading gaming and emerging tech innovators will showcase their wares. The conference will also bring together 150+ of the industry’s best-and-brightest minds to highlight the latest trends. Not to mention the plethora of networking events, where you can connect with like-minded professionals. ",
        image: "sigma-americas.jpeg",
        link: "https://sigma.world/americas/#",
        price: 120,
        comments: [
            {
                body:"It was my first time going and it was a brilliant experience",
                author: profile[7].name,
            },
            {
                body:"I enjoyed it for most part, it was too busy for my liking.",
               author: profile[8].name,
            },
        ],
      },
      {
        title: "XConf Singapore",
        location: locations[4]._id,
        description:
          "our annual technology event created by technologists for technologists - is back in-person this year!",
        whyattend:
          "Join us at this one-day event to hear insightful talks from thought leaders and Thoughtworkers on topics including Data Mesh, Platform Thinking, Decentralized Identity, Accessible Tech, Responsible Tech, and much more",
        image: "xconf.jpeg",
        link: "https://www.eventbrite.sg/e/xconf-singapore-2022-tickets-327030586287",
        price: 350,
        comments: [
            {
                body:"A super event with many interesting people and activities!",
                author: profile[10].name
            },
            {
                body:"I enjoyed it and so did my colleagues! We have made this an annual business day out!",
                author: profile[11].name
            },
        ],
      },
      {
        title: "SENSOR EXPO JAPAN 2022",
        location: locations[4]._id,
        description:
          "our annual technology event created by technologists for technologists - is back in-person this year!",
        whyattend:
          "Join us at this one-day event to hear insightful talks from thought leaders and Thoughtworkers on topics including Data Mesh, Platform Thinking, Decentralized Identity, Accessible Tech, Responsible Tech, and much more",
        image: "country_image_japan.jpeg",
        link: "https://www.bigsight.jp/english/organizer/value/",
        price: 270,
        comments: [
            {
                body:"This was the best event I have been to, hihly recommended by myself and my friends",
                author: profile[16].name
            },
            {
                body:"My employers sent me here and I was able to gain a lot of good information which will benefit our business moving forwards!",
                author: profile[17].name
            },
        ],
      },
      {
        title: "Africa Tech Summit, Nairobi",
        location: locations[5]._id,
        description:
          "Africa Tech Summit Nairobi connects tech leaders from the African ecosystem and international players under one roof.",
        whyattend:
          "Network with key stakeholders including tech corporates, mobile operators, fintechs, DeFi & crypto ventures, investors, leading start-ups, regulators and industry stakeholders driving business and investment forward. Following a sell out in 2022, the fifth edition convenes in Nairobi, Kenya.",
        image: "africa-tech-summit.png",
        link: "https://www.africatechsummit.com/nairobi/register/",
        price: 160,
        comments: [
            {
                body:"In my opinion this is th best tech event in Africa, if not the whole world! Amazing!",
                author: profile[19].name
            },
            {
                body:"I enjoyed attending this tech summit, it was a great insight into both personal and business developments.",
                author: profile[20].name
            },
        ],
      },
    ]);

    console.log("events seeded");

    console.log("all done!");
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
