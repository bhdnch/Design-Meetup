const schedules = {
    "Day 01": {
        "Event 01": {
            title: "Entry Registration & Continental Breakfast",
            timeFrom: "08:00 AM",
            timeTo: "09:00 AM",
            location: "Dining Hall",
            url: "#",
        },
        "Event 02": {
            title: "Introduction Creative Design | Carrier Guideline",
            timeFrom: "09:00 AM",
            timeTo: "10:00 AM",
            location: "Hall of Fame 01",
            url: "#",
        },
        "Event 03": {
            title: "Introduction UX Design | Carrier Guideline",
            timeFrom: "10:00 AM",
            timeTo: "12:00 PM",
            location: "Hall of Fame 01",
            url: "#",
        },
        "Event 04": {
            title: "Lunch Break",
            timeFrom: "12:00 PM",
            timeTo: "02:00 PM",
            location: "Dining Hall",
            url: "#",
        },
    },
    "Day 02": {
        "Event 01": {
            title: "Another One",
            timeFrom: "08:00 AM",
            timeTo: "09:00 AM",
            location: "Dining Hall",
            url: "#",
        },
        "Event 02": {
            title: "Another One",
            timeFrom: "09:00 AM",
            timeTo: "10:00 AM",
            location: "Hall of Fame 01",
            url: "#",
        },
        "Event 03": {
            title: "Another One",
            timeFrom: "10:00 AM",
            timeTo: "12:00 PM",
            location: "Hall of Fame 01",
            url: "#",
        },
        "Event 04": {
            title: "Another One",
            timeFrom: "12:00 PM",
            timeTo: "02:00 PM",
            location: "Dining Hall",
            url: "#",
        },
    },
    "Day 03": {
        "Event 01": {
            title: "Another One 2",
            timeFrom: "08:00 AM",
            timeTo: "09:00 AM",
            location: "Dining Hall",
            url: "#",
        },
        "Event 02": {
            title: "Another One 2",
            timeFrom: "09:00 AM",
            timeTo: "10:00 AM",
            location: "Hall of Fame 01",
            url: "#",
        },
        "Event 03": {
            title: "Another One 2",
            timeFrom: "10:00 AM",
            timeTo: "12:00 PM",
            location: "Hall of Fame 01",
            url: "#",
        },
        "Event 04": {
            title: "Another One 2",
            timeFrom: "12:00 PM",
            timeTo: "02:00 PM",
            location: "Dining Hall",
            url: "#",
        },
    },
};

const tabs = document.querySelectorAll("#schedule__btn");
const tabsWrapper = document.querySelector(".schedule__header__tabs");
const scheduleBody = document.querySelector(".schedule__body");

tabsWrapper.addEventListener("click", tabSwitcher);
function tabSwitcher(event) {
    let day = "01";
    if (event !== undefined) {
        // Remove Active Class
        tabs.forEach((elem) => {
            elem.classList.remove("active");
        });

        // Add Active Class to a selected button
        event.target.classList.add("active");
        // Get Data Day for getting schedule day in "schedules" object
        day = event.target.getAttribute("data-day");
    }

    // Do
    switch (day) {
        case "01":
            createEvent(schedules["Day 01"]);
            break;
        case "02":
            createEvent(schedules["Day 02"]);
            break;
        case "03":
            createEvent(schedules["Day 03"]);
            break;
    }
}
tabSwitcher();

// Dynamic Creating Elements on Page from Object
function createEvent(day = "01") {
    document.querySelector(".schedule__body").innerHTML = "";
    for (let key in day) {
        let item = day[key];
        console.log(item);
        // Elements Creating
        let body = document.createElement("div");
        let aside = document.createElement("div");
        let wrap = document.createElement("div");

        let wrapTitle = document.createElement("h3");

        let wrapInfo = document.createElement("div");

        wrapInfoTime = document.createElement("p");
        wrapInfoLocation = document.createElement("p");

        wrapButton = document.createElement("a");
        // Classes Setting
        body.classList.add("schedule__body__item");
        aside.classList.add("schedule__body__item__aside");
        wrap.classList.add("schedule__body__item__wrap");

        wrapTitle.classList.add("schedule__body__title");

        wrapInfo.classList.add("schedule__body__info");

        wrapInfoTime.classList.add("schedule__body__info__time");
        wrapInfoLocation.classList.add("schedule__body__info__location");
        // Content
        aside.innerHTML = `<div></div><p>${item.timeFrom}</p>`;

        wrapTitle.innerHTML = item.title;

        wrapInfoTime.innerHTML = `<i class="fa-regular fa-clock"></i>${item.timeFrom} - ${item.timeTo}`;
        wrapInfoLocation.innerHTML = `<i class="fa-solid fa-location-dot"></i>${item.location}`;

        wrapButton.setAttribute("href", item.url);
        wrapButton.innerHTML = "View Details";
        // Appending
        scheduleBody.appendChild(body);
        body.appendChild(aside);
        body.appendChild(wrap);

        wrap.appendChild(wrapTitle);

        wrap.appendChild(wrapInfo);

        wrapInfo.appendChild(wrapInfoTime);
        wrapInfo.appendChild(wrapInfoLocation);

        wrap.appendChild(wrapButton);
    }
}
