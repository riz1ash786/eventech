const db = require("../config/connection");
const { Profile, Event, Location} = require("../models");

db.once("open", async () => {
  try {
    await Location.deleteMany();

    const locations = await Location.insertMany([
      { name: "UK" },
      { name: "Europe" },
      { name: "Asia" },
      { name: "Americas" },
      { name: "Far-East" },
      { name: "Remote" },
    ]);

    console.log("locations seeded");

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
        price: 60,
        likeCount: 56,
        comments: [
          {
            body: "Wow, this was a great experience, the location is amazing, and the conference does not disappoint! I will be going again next year!",
            name: "Nadine",
            createdAt:"03-04-2022"
          },
          {
            body: "The event really lives up to the hype!",
            name:"Rizwan",
            createdAt:"17-07-2021"
          },
          {
            body: "A great place to network and meet a lot of very knowledgeable tech minds! ",
            name:"Danielle",
            createdAt:"25-06-2021"
          },
        ],
      // profile: profile[0]
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
        price: 70,
        likeCount: 88,
        comments: [
          {
            body: 
            "I go to the ISE event every year; I am one of the exhibitors and love sharing my knowledge and experiences with people who are interested in learning more about the technical field.",
            name: "Emma",
            createdAt:"17-07-2021"
          },
          {
            body: "A great range of stands and people of different backgrounds and skillsets and overall, a pleasant experience! ",
            name:"Claire",
            createdAt:"16-04-2021"
          },
          {
            body: "Highly recommended I will definitely be going here again next year!",
            name:"Adam",
            createdAt:"11-03-2020"
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
        price: 55,
        likeCount: 91,
        comments: [
          {
            body: "I’ve been to a number of TSIA events in different locations, and I must say this one has been my favourite!!",
            name: "Sara",
            createdAt:"14-05-2021"
          },
          {
            body: "I’ve just spent the day at the TSIA event, and I can’t say I enjoyed it very much. I tried my best to meet new people and build my network, but everyone was just so busy. The event was packed full and there were not many places to sit and have a break! ",
            name:"Tracey",
            createdAt:"17-01-2020"

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
        price: 90,
        likeCount: 73,
        comments: [
          {
            body: "A great event! Lots to do and free access is a bonus!            ",
            name: "Ryan",
            date:"16-04-2021"
          },
          {
            body: "We really benefited going to the Computex event, easy access and a great range of services on offer!",
            name:"Anna",
            date:"12-02-2020"
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
        price: 70,
        likeCount: 29,
        comments: [
          {
            body: "I thought it was very informative!",
            name: "Ben",
            date:"12-02-2022"
          },
          {
            body: "This event was very interesting with a great panel of speakers.",
            name:"Maria",
            date:"10-08-2020"

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
        price: 80,
        likeCount: 195,
        comments: [
          {
            body: "One of the best Technology conferences I’ve been to in a long time!",
            name: "Richard",
            date:"12-02-2022"
          },
          {
            body: "It’s great, easy to get to and the event has lots to offer – highly recommend!",
            name:"Simon",
            date:"05-10-2021"

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
        price: 85,
        likeCount: 140,
        comments: [
          {
            body: "This event has really grown and improved from when I went a few years ago! ",
            name: "Stephanie",
            date:"12-02-2020"
          },
          {
            body: "If you are thinking of going, then I would definitely advise you to give it a go! I managed to meet lots of people and I even secured a few job interviews!",
            name:"Claudia",
            date:"02-12-2019"
          },
          {
            body: "Enjoyable, educational and lots of freebies, what’s not to love! See you again next year!",
            name:"Julia",
            date:"08-05-2018"
          },
        ],
      },
      {
        title: "Cloudflare Connect",
        location: locations[5]._id,
        link: "https://www.cloudflare.com/pg-lp/free-fast-secure-dns/?&_bt=601494744645&_bk=cf%20dns&_bm=b&_bn=g&_bg=136911167506&_placement=&_target=&_loc=1006884&_dv=c&awsearchcpc=1&gclid=Cj0KCQjwwJuVBhCAARIsAOPwGAQpLvpjICrDdBFh5z9FsDP72LoKRoXNBsOh9j6IXmGk3O_SGOGrEr4aAgRREALw_wcB&gclsrc=aw.ds",
        description:
          "Cloudflare Connect brings together the experts driving network and security transformation to discuss what's next in the space.",
        whyattend:
          " Keynotes and learning sessions from special guests, demos, hands-on labs, and real-world use cases. There will be exclusive breakout rooms for in-person attendees, with keynote sessions available to attend virtually for free. In addition to cybersecurity and digital network experts, speakers will include Cloudflare’s CTO, John Graham-Cumming.",
        image: "cloudfare.jpg",
        price: 75,
        likeCount: 14,
        comments: [
          {
            body: "Very informative but a little boring – the event lacked the excitement, maybe I was expecting too much?",
            name: "Tiffany",
            date:"08-05-2022"
          },
          {
            body: "An education event with no fuss! A great environment and lots of interesting people to talk to!",
            name:"Julie",
            date:"10-06-2021"
          },
          {
            body: "It wasn’t for me, I found it difficult to talk to people and get the answers that I was looking for. ",
            name:"Angela",
            date:"19-02-2020"
          },
        ],
      },
      {
        title: "Infosecurity Europe",
        location: locations[5]._id,
        link: "https://www.iseurope.org/location-and-opening-hours/",
        description:
          "Infosecurity Europe is up there with the largest and most well-regarded cybersecurity conferences in the calendar.",
        whyattend:
          "In an industry characterised by constant change, it's vital to keep abreast of all the latest developments. Infosecurity Europe is designed to help you do just that.",
        image: "is.jpg",
        price: 60,
        likeCount: 68,
        comments: [
          {
            body: "This was amazing! So much on offer and really cool people to meet! I’ve just finished University and it was very confident inspiring to see others doing so well in this field. I gained some great advice from the people I met!",
            name: "Mike",
            date:"19-02-2021"
          },
          {
            body: "A great event, friendly people who are happy to speak to you and so much to learn! I highly recommend this to anyone who is thinking about going!",
            name:"Katie",
            date:"01-02-2020"
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
        price: 80,
        likeCount: 82,
        comments: [
          {
            body: "The event was not what I was expecting, I am not sure if I would go again – I wish there were more stands, and it could have lasted longer.",
            name: "Max",
            date:"19-05-2022"
          },
          {
            body: "I agree with the comment above about it being too short, but I did benefit from the people that I met!",
            name: "Matt",
            date:"18-02-2022"
          },
          {
            body: "Enjoyable, educational and lots of freebies, what’s not to love! See you again next year!",
            name:"Nadine",
            date:"19-02-2020"
          },
        ],
      },
      {
        title: "IFA Berlin",
        location: locations[5]._id,
        link: "https://b2b.ifa-berlin.com/en/trade-visitors/ticketing-services/",
        description:
          "IFA is Europe's biggest technology showcase, held in September every year in Berlin and attended by most of the major players in the industry.",
        whyattend:
          "With many businesses avoiding the show last year due to the pandemic, it's possible IFA 2022 will yield a bumper crop of amazing and wacky tech.",
        image: "berlin.jpg",
        price: 90,
        likeCount: 16,
        comments: [
          {
            body: "Fantastic, I went to this event to broaden my knowledge about the jobs market with the intention to meet people and grow my network! I managed to hand out my CV to quite a lot of people which was great!",
            name: "Jessica",
            date:"10-03-2022"
          },
          {
            body: "I went to this event after being recommended it from a few colleagues at work. I am glad to say it was a great event and I thoroughly enjoyed meeting like-minded people.",
            name:"Carla",
            date:"19-02-2020"
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
        price: 7.99,
        likeCount: 73,
        comments: [
          {
            body: "Wow, what can I say surely the biggest and most impressive event I have been to! Dubai does not disappoint, the effort that the organisers have put it is amazing. Lots to learn, see and experience!",
            name: "John",
            date:"19-02-2022"
          },
          {
            body: "Such a huge venue with so much going on! Great guest speakers and opportunities to meet people. The only thing I would say is that you need the whole day to get around here!",
            name:"Emily",
            date:"29-03-2020"
          },
          {
            body: "GITEX Dubai – 5-star event with great stands and amazing visuals! The event is huge and difficult to experience everything in one day so I would advise to plan well before arrival!",
            name:"Anna",
            createdAt:"04-02-2018"
          },
        ],
      },
    ]);

    console.log("events seeded");

    await Profile.deleteMany({});

    const profile= await Profile.create([
      {
        name: "Brian Kernighan",
        email: "bkernighan@techfriends.dev",
        password: "password01",
      },
      {
        name: "Max Kanat-Alexander",
        email: "mkanatalexander@techfriends.dev",
        password: "password02",
      },
      {
        name: "Amiko",
        email: "amiko@techfriends.dev",
        password: "password03",
       },
      {
        name: "Kent Beck",
        email: "kbeck@techfriends.dev",
        password: "password04",
      },
      {
        name: "Edward V. Berard",
        email: "evberard@techfriends.dev",
        password: "password05",
      },
      {
        name: "Alan Kay",
        email: "akay@techfriends.dev",
        password: "password06",
      },
      {
        name: "C.A.R. Hoare",
        email: "choare@techfriends.dev",
        password: "password07",
      },
      {
        name: "David Thomas",
        email: "dthomas@techfriends.dev",
        password: "password08",
      },
      {
        name: "Donald Knuth",
        email: "dknuth@techfriends.dev",
        password: "password09",
      },
      {
        name: "Lernantino",
        email: "lernantino@techfriends.dev",
        password: "password10",
      },
    ]);

    console.log("all done!");
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
