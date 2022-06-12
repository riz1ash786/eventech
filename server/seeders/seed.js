const db = require("../config/connection");
const { Profile, Event, Location, Interested } = require("../models");

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
        name: "Datacloud Global Congress",
        description:
          "Datacloud Global Congress attracts circa 2,000 executives from the data centre and cloud industries, and not just because of the location.",
        whyattend:
          "Keynotes, panels and roundtables covering a wide number of brand new topics reflecting current trends and market outlook.",
        image: "datacloud.jpeg",
        location: locations[1]._id,
        price: 60,
        quantity: 500,
      },
      {
        name: "ISE 2022",
        description:
          "ISE is the world's top AV and systems integration conference, where the industry's best and brightest showcase their latest solutions.",
        whyattend:
          "Three days of keynotes, seminars and seminars covering the application of AV technology in industries from hospitality and smart homes to retail, live events and more.",
        image: "europe.png",
        location: locations[1]._id,
        price: 70,
        quantity: 500,
      },
      {
        name: "Technology & Services World",
        location: locations[3]._id,
        description:
          "Technology & Services World (TSW) is an immersive learning and networking experience, held by The Technology & Services Industry Association (TSIA).",
        whyattend:
          "As new business challenges arise and the economy shifts, TSW delivers relevant technology services, sales, channel optimization and product content that will help attendees navigate the changes.",
        image: "tsia.png",
        price: 55,
        quantity: 20,
      },
      {
        name: "Computex 2022",
        location: locations[4]._id,
        description:
          "Computex is one of the largest technology events in the APAC region, with a particular focus on computing. ",
        whyattend:
          "The focus of Computex 2022 will be on innovative computing, accelerating intelligence, digital resilience, connected X-Experience, innovations and startups, and sustainability. Expect big announcement from Intel, AMD, Nvidia and the other semiconductor giants.",
        image: "computex.jpg",
        price: 90,
        quantity: 50,
      },
      {
        name: "RSA Conference 2022",
        location: locations[3]._id,
        description:
          "RSA Conference is a long-running event that brings the world's leading cybersecurity professionals under one roof.",
        whyattend:
          "Hear from industry leaders on how to place resilience at the forefront of your cyber strategy and prepare for security challenges of the new normal.",
        image: "rsa.jpeg",
        price: 70,
        quantity: 100,
      },
      {
        name: "London Tech Week",
        location: locations[0]._id,
        description:
          "London Tech Week is a week-long celebration of technology innovation, housing various different technology-specific shows.",
        whyattend:
          "At London Tech Week, there's something for everyone, with events on topics from AI and 5G to quantum computing, the future of work and more.",
        image: "london-tech-week.png",
        price: 80,
        quantity: 30,
      },
      {
        name: "Dublin Tech Summit",
        location: locations[0]._id,
        description:
          "Dublin Tech Summit Virtual will gather the most influential minds in tech and business from across the globe.",
        whyattend:
          " Hear from 200+ speakers and connect with 8,000 fellow attendees from 60+ countries. There will be more than 80 conference sessions across four stages, covering topics such as space tech, emerging tech, growth and much more!",
        image: "dublin.png",
        price: 85,
        quantity: 30,
      },
      {
        name: "Cloudflare Connect",
        location: locations[5]._id,
        description:
          "Cloudflare Connect brings together the experts driving network and security transformation to discuss what's next in the space.",
        whyattend:
          " Keynotes and learning sessions from special guests, demos, hands-on labs, and real-world use cases. There will be exclusive breakout rooms for in-person attendees, with keynote sessions available to attend virtually for free. In addition to cybersecurity and digital network experts, speakers will include Cloudflare’s CTO, John Graham-Cumming.",
        image: "cloudfare.jpg",
        price: 75,
        quantity: 1000,
      },
      {
        name: "Infosecurity Europe",
        location: locations[5]._id,
        description:
          "Infosecurity Europe is up there with the largest and most well-regarded cybersecurity conferences in the calendar.",
        whyattend:
          "In an industry characterised by constant change, it's vital to keep abreast of all the latest developments. Infosecurity Europe is designed to help you do just that.",
        image: "is.jpg",
        price: 60,
        quantity: 1000,
      },
      {
        name: "Black Hat USA 2022",
        location: locations[3]._id,
        description:
          "Black Hat is a long-running and highly technical show for security professionals.",
        whyattend:
          "Receive the latest information in security research, development and trends in a strictly vendor-neutral environment.",
        image: "black-hat.png",
        price: 80,
        quantity: 600,
      },
      {
        name: "IFA Berlin",
        location: locations[5]._id,
        description:
          "IFA is Europe's biggest technology showcase, held in September every year in Berlin and attended by most of the major players in the industry.",
        whyattend:
          "With many businesses avoiding the show last year due to the pandemic, it's possible IFA 2022 will yield a bumper crop of amazing and wacky tech.",
        image: "berlin.jpg",
        price: 90,
        quantity: 100,
      },
      {
        name: "GITEX Global",
        location: locations[2]._id,
        description:
          "The Middle East's largest show for the technology industry that brings together thought-leaders, creators, innovators and makers to discuss, debate and challenge new ideology, showcase new products and identify future opportunities",
        whyattend:
          "You'll get access to conference programmes with over 1000 expert speakers, 4000 exhibitors and more than 200 government entities from 170 countries.",
        image: "gitex.png",
        price: 7.99,
        quantity: 80,
      },
    ]);

    console.log("events seeded");

    await Profile.deleteMany({});

    await Profile.create([
      {
        name: "Brian Kernighan",
        email: "bkernighan@techfriends.dev",
        password: "password01",
        allinterested: [
          {
            events: [events[0]._id, events[2]._id, events[1]._id],
          },
        ],
      },
      {
        name: "Max Kanat-Alexander",
        email: "mkanatalexander@techfriends.dev",
        password: "password02",
        allinterested: [
          {
            events: [events[10]._id, events[3]._id, events[6]._id],
          },
        ],
      },
      {
        name: "Amiko",
        email: "amiko@techfriends.dev",
        password: "password03",
        allinterested: [
          {
            events: [events[0]._id, events[8]._id, events[5]._id],
          },
        ],
      },
      {
        name: "Kent Beck",
        email: "kbeck@techfriends.dev",
        password: "password04",
        allinterested: [
          {
            events: [events[6]._id, events[11]._id, events[9]._id],
          },
        ],
      },
      {
        name: "Edward V. Berard",
        email: "evberard@techfriends.dev",
        password: "password05",
        allinterested: [
          {
            events: [events[6]._id, events[5]._id, events[1]._id],
          },
        ],
      },
      {
        name: "Alan Kay",
        email: "akay@techfriends.dev",
        password: "password06",
        allinterested: [
          {
            events: [events[10]._id, events[5]._id, events[9]._id],
          },
        ],
      },
      {
        name: "C.A.R. Hoare",
        email: "choare@techfriends.dev",
        password: "password07",
        allinterested: [
          {
            events: [events[1]._id, events[2]._id, events[8]._id],
          },
        ],
      },
      {
        name: "David Thomas",
        email: "dthomas@techfriends.dev",
        password: "password08",
        allinterested: [
          {
            events: [events[9]._id, events[7]._id, events[11]._id],
          },
        ],
      },
      {
        name: "Donald Knuth",
        email: "dknuth@techfriends.dev",
        password: "password09",
        allinterested: [
          {
            events: [events[1]._id, events[2]._id, events[8]._id],
          },
        ],
      },
      {
        name: "Lernantino",
        email: "lernantino@techfriends.dev",
        password: "password10",
        allinterested: [
          {
            events: [events[9]._id, events[8]._id, events[7]._id],
          },
        ],
      },
    ]);

    console.log("all done!");
    process.exit(0);
  } catch (err) {
    throw err;
  }
});