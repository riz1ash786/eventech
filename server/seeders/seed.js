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
        comments: [],
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
        comments: [],
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
        comments: [],
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
        comments: [],
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
        comments: [],
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
        comments: [],
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
        comments: [],
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
        comments: [],
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
        comments: [],
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
        comments: [],
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
        comments: [],
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
        comments: [],
      },

      // {
      //   title: "Web Summit Lisbon",
      //   location: locations[1]._id,
      //   description:
      //     "We’re a company from Dublin, Ireland, that holds events across the world: Web Summit in Lisbon, Web Summit Rio in Rio de Janeiro, Collision in Toronto, and RISE in Hong Kong.",
      //   whyattend:
      //     "Web Summit 2022 will bring together 70,000+ people, and the companies redefining the tech industry.",
      //   image: "computex.jpg",
      //   link: "https://websummit.com/tickets/attendees",
      //   price: 495,
      //   likeCount: 23,
      //   comments: [
      //       {
      //           body:"The best technology conference on the planet according to Forbes and I agree! It waa great!",
      //           name:"Jackie",
      //           date:"16-02-2022"
      //       },
      //       {
      //           body:"This show is THE place to be for all things #eventech. Highly recommended for exhibitors in the industry and attendees looking for the latest and greatest in event technology.",
      //           name:"Monica",
      //           date:"04-09-2021"
      //   },
      //   ],
      // },
      // {
      //   title: "Event Technology Live",
      //   location: locations[0]._id,
      //   description:
      //     "The World's Leading Event Technology Expos - London to Las Vegas",
      //   whyattend:
      //     "Event Technology Live is the only event portfolio dedicated to event technology that showcases digital, in-person and hybrid events.",
      //   image: "computex.jpg",
      //   link: "https://eventtechlive.com/membership-selection/",
      //   price: 150,
      //   likeCount: 88,
      //   comments: [
      //       {
      //           body:"It was very interesting, hope I can make it again next year",
      //           name:"Figo",
      //           date:"16-02-2022"
      //       },
      //       {
      //           body:"Friendly and helpful professionals who are happy to share their knowledge and experiences. It really benefited me!",
      //           name:"Christiano",
      //           date:"04-09-2021"
      //   },
      //   ],
      // },
      // {
      //   title: "OpenText World EMEA",
      //   location: locations[1]._id,
      //   description:
      //     "In a world of accelerated change and new ways for modern work, businesses rely on information management to stay ahead. Join us at OpenText World EMEA 2022 to discover more efficient, collaborative, and innovative solutions to solve today’s business challenges.",
      //   whyattend:
      //     "At OpenText, we obsess over driving innovation that can help you power and protect information across employees, customers, suppliers, and partners. That is why we’re here to help you discover how you can gain an information advantage.",
      //   image: "computex.jpg",
      //   link: "https://www.opentextworld.com/event/65ea7cf3-e6bc-4067-9b43-377cacc15d69/register?RefId=FY22-OTW-EMEA-PPC-textad-v2&gclid=CjwKCAjwqauVBhBGEiwAXOepkUS7z3j2I8MTXPdaXaguoYuCc8Y0LhKbVoTRAWB-c1y5a0MAVLxIUxoC58oQAvD_BwE",
      //   price: 195,
      //   likeCount: 28,
      //   comments: [
      //       {
      //           body:"This conference could have been more interesting, the speaker panel was not great and I found myself wondering what I could gain from the event.",
      //           name:"Robert",
      //           date:"09-01-2022"
      //       },
      //       {
      //           body:"Very enjoyable and a productive day out!",
      //           name:"Kylian",
      //           date:"12-05-2021"
      //   },
      //   ],
      // },
      // {
      //   title: "IDC CIO Summit Bahrain",
      //   location: locations[2]._id,
      //   description:
      //     "The IDC CIO Summit 2022 will explore Bahrain's changing technology landscape and present strategies that will help organizations evolve into digitally resilient enterprises and secure their rightful place in the 'Next Normal'.",
      //   whyattend:
      //     "The Bahrain CIO Summit 2022 features a tailored agenda filled with handpicked topics, discussions, panel sessions, and keynote presentations from regional and global technology experts that will explore all of today's hottest ICT issues.",
      //   image: "computex.jpg",
      //   link: "https://www.idc.com/mea/events/upcoming-events",
      //   price: 275,
      //   likeCount: 224,
      //   comments: [
      //       {
      //           body:"A great eye opener and insight into future developments",
      //           name:"Seyed",
      //           date:"13-04-2022"
      //       },
      //       {
      //           body:"It was a fantastic event to network and meet like minded professionals in the same field!",
      //           name:"Fayed",
      //           date:"13-04-2022"
      //       },
      //       {
      //           body:"I decided to come here last minute and I am glad I did. The event has a lot to offer!",
      //           name:"Idris",
      //           date:"12-05-2021"
      //   },
      //   ],
      // },
      // {
      //   title: "VMware Egypt Summit",
      //   location: locations[2]._id,
      //   description:
      //     "Organizations across the country are embracing a digital-first approach in line with 'Digital Egypt', an all-encompassing vision and plan that lays the foundations for the transformation of Egypt into a digital society. ",
      //   whyattend:
      //     "This event will feature insights from IDC and VMware experts as they discuss how Egypt's organizations can benefit from the flexibility of a multicloud strategy, gain greater control over all their clouds, and advance toward their digital business goals while streamlining operations and maintaining enterprise control.",
      //   image: "computex.jpg",
      //   link: "https://meaevents.idc.com/event/4d189ecf-2f04-4e6b-b409-5e59ebf0f458/regProcessStep1",
      //   price: 75,
      //   likeCount: 47,
      //   comments: [
      //       {
      //           body:"Very knowledgeable speaking panel, I will attend again next year to see how plans are progressing",
      //           name:"Omar",
      //           date:"30-11-2022"
      //       },
      //       {
      //           body:"It was a great event, this is the third time I have been!",
      //           name:"Mane",
      //           date:"30-11-2022"
      //       },
      //       {
      //           body:"As a domestic resident it is very exciting to see the technological plans being discussed for my country and worldwide development!",
      //           name:"Hosni",
      //           date:"17-08-2021"
      //   },
      //   ],
      // },
      // {
      //   title: "IDC West Africa CIO Summit 2022",
      //   location: locations[5]._id,
      //   description:
      //     "The IDC West Africa CIO Summit 2022 will explore the country's changing technology landscape and present strategies that will help organizations evolve into digitally resilient enterprises and secure their rightful place in the 'Next Normal'.",
      //   whyattend:
      //     "The IDC West Africa CIO Summit 2022 features a tailored agenda filled with handpicked topics, discussions, panel sessions, and keynote presentations from regional and global technology experts that will explore all of today's hottest ICT issues.",
      //   image: "computex.jpg",
      //   link: "https://www.idc.com/mea/events/69468-idc-west-africa-cio-summit-2022/proceedings",
      //   price: 50,
      //   likeCount: 137,
      //   comments: [
      //       {
      //           body:"I have partnered with many tech events globally, by far this is my favorite!",
      //           name:"Theresa",
      //           date:"16-03-2022"
      //       },
      //       {
      //           body:"The event has a lot to offer and never dissapoints!",
      //           name:"Kashifu",
      //           date:"26-08-2022"
      //       },
      //       {
      //           body:"Last year I attended as a guest speaking to people to learn more about the field and this year I am hosting my own stand and looking forward to helping others!",
      //           name:"Yemisi",
      //           date:"19-02-2021"
      //   },
      //   ],
      // },
      // {
      //   title: "SiGMA Americas - Sao Paulo",
      //   location: locations[3]._id,
      //   description:
      //     "SiGMA Americas is heading to the buzzing metropolis of Sao Paolo in Brazil for the next edition of our world-renowned show, this time combining both the gaming and emerging tech industries under one roof. The event will take place on 13th – 14th September 2022 at the beautiful Tivoli Hotel.",
      //   whyattend:
      //     "As the fastest growing gaming market in the world, Latin America is the ideal backdrop for our bustling expo floor where the leading gaming and emerging tech innovators will showcase their wares. The conference will also bring together 150+ of the industry’s best-and-brightest minds to highlight the latest trends. Not to mention the plethora of networking events, where you can connect with like-minded professionals. ",
      //   image: "computex.jpg",
      //   link: "https://sigma.world/americas/#",
      //   price: 120,
      //   likeCount: 448,
      //   comments: [
      //       {
      //           body:"It was my first time going and it was a brilliant experience",
      //           name:"Rivaldo",
      //           date:"18-08-2021"
      //       },
      //       {
      //           body:"I enjoyed it for most part, it was too busy for my liking.",
      //           name:"Cafu",
      //           date:"26-08-2019"
      //       },
      //   ],
      // },
      // {
      //   title: "XConf Singapore",
      //   location: locations[4]._id,
      //   description:
      //     "our annual technology event created by technologists for technologists - is back in-person this year!",
      //   whyattend:
      //     "Join us at this one-day event to hear insightful talks from thought leaders and Thoughtworkers on topics including Data Mesh, Platform Thinking, Decentralized Identity, Accessible Tech, Responsible Tech, and much more",
      //   image: "computex.jpg",
      //   link: "https://www.eventbrite.sg/e/xconf-singapore-2022-tickets-327030586287",
      //   price: 50,
      //   likeCount: 513,
      //   comments: [
      //       {
      //           body:"A super event with many interesting people and activities!",
      //           name:"Adam",
      //           date:"14-05-2022"
      //       },
      //       {
      //           body:"I enjoyed it and so did my colleagues! We have made this an annual business day out!",
      //           name:"Lee",
      //           date:"02-12-2021"
      //       },
      //   ],
      // },
      // {
      //   title: "SENSOR EXPO JAPAN 2022",
      //   location: locations[4]._id,
      //   description:
      //     "our annual technology event created by technologists for technologists - is back in-person this year!",
      //   whyattend:
      //     "Join us at this one-day event to hear insightful talks from thought leaders and Thoughtworkers on topics including Data Mesh, Platform Thinking, Decentralized Identity, Accessible Tech, Responsible Tech, and much more",
      //   image: "computex.jpg",
      //   link: "https://www.bigsight.jp/english/organizer/value/",
      //   price: 50,
      //   likeCount: 513,
      //   comments: [
      //       {
      //           body:"This was the best event I have been to, hihly recommended by myself and my friends",
      //           name:"Haruki",
      //           date:"09-05-2022"
      //       },
      //       {
      //           body:"My employers sent me here and I was able to gain a lot of good information which will benefit our business moving forwards!",
      //           name:"Yoko",
      //           date:"04-04-2021"
      //       },
      //   ],
      // },
      // {
      //   title: "Africa Tech Summit, Nairobi",
      //   location: locations[5]._id,
      //   description:
      //     "Africa Tech Summit Nairobi connects tech leaders from the African ecosystem and international players under one roof.",
      //   whyattend:
      //     "Network with key stakeholders including tech corporates, mobile operators, fintechs, DeFi & crypto ventures, investors, leading start-ups, regulators and industry stakeholders driving business and investment forward. Following a sell out in 2022, the fifth edition convenes in Nairobi, Kenya.",
      //   image: "computex.jpg",
      //   link: "https://www.africatechsummit.com/nairobi/register/",
      //   price: 60,
      //   likeCount: 203,
      //   comments: [
      //       {
      //           body:"In my opinion this is th best tech event in Africa, if not the whole world! Amazing!",
      //           name:"Njoroge",
      //           date:"19-07-2021"
      //       },
      //       {
      //           body:"I enjoyed attending this tech summit, it was a great insight into both personal and business developments.",
      //           name:"Hugo",
      //           date:"07-06-2021"
      //       },
      //   ],
      // },
    ]);

    console.log("events seeded");

    console.log("all done!");
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
