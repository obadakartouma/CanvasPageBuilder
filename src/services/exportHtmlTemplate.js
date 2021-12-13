function makeLearningObjectivesForHtml(learningObjectivesItems) {
  let ulList = "<ul>";
  learningObjectivesItems.map((item) => {
    ulList += `<li>${item.item}</li>`;
  });
  ulList += "</ul>";
  return ulList;
}

function makeCourseNavigationForHtml(courseNavigation) {
  let cns = `<div class="courseNavigationItemsWrapper">`;

  courseNavigation.map((item) => {
    let newCN = `<div class="cnWrapper">
      <div class="cnTitle">
      <div class="cnTitle_Duration">🕑${item.time} min</div>
      <div class="cnTitle_title">${item.title}</div>
      </div>

      <div class="cnBody">
      ${makeChapterForCourseNavigation(item.chapter)}
      </div>
      <a class="cnATag" href="${item.link}">
              <div class="cnButton">Start</div>
      </a>
  </div>`;
    cns += newCN;
  });
  cns += `</div>`;
  return cns;
}

function makeChapterForCourseNavigation(chapters) {
  let ulList = `<ol type="1">`;
  chapters.map((item) => {
    ulList += `<li>${item}</li>`;
  });
  ulList += `</ol>`;
  return ulList;
}

function makeContacts(contacts) {
  let htmlContacts = `<div class="contactItemsWrapper">`;
  contacts.map((c) => {
    let newContact = `<div class="contactWrapper">
    <div class="contactleft">
      <img src="${c.profilePicture}" class="headerImage" />
    </div>
    <div class="contactRight">
      <span class="contactName">${c.name}</span>
      <a class="contactEmail" href=" ${c.email}">
      ${c.email}
      </a>
    </div>
  </div>`;
    htmlContacts += newContact;
  });
  htmlContacts += `</div>`;
  return htmlContacts;
}

function makeNewHtml(
  imageUrlObjects,
  courseStructureObjects,
  learningObjectivesObjects,
  courseNavigationObjects,
  contacts
) {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link type="text/css" rel="stylesheet" href="./graduatecampus.css" />
      <title></title>
    </head>
    <body>
      <div class="ganze">
        <div class="headerImageContainer">
          <img class="headerImage" src="${imageUrlObjects}" />
        </div>
        <div class="courseStrWrapper">
          <h3 class="viewHeader" style="margin-bottom: 9px">Course Structure</h3>
          <div class="viereck">&nbsp;</div>
          <span class="courseStrText">
          ${courseStructureObjects}
          </span>
        </div>
        <div class="learningObjectivesContainer">
          <h3 class="viewHeader">Learning Objectives</h3>
          <div class="viereck">&nbsp;</div>
          <div class="learningObjectivesInnerContainer">
            <div class="learningObjectivesItems">
              ${makeLearningObjectivesForHtml(learningObjectivesObjects.items)}
            </div>
            <div class="learningObjectivesVideo">
              <video controls="controls" class="video">
                <source
                  src="${learningObjectivesObjects.youtubeUrl}"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
        <div class="coursenavigationWrapper">
          <div class="coursenavigationHeader">Course Navigation</div>
          <div class="viereck">&nbsp;</div>
          ${makeCourseNavigationForHtml(courseNavigationObjects.items)}
        </div>
        <div class="contactsWrapper">
          <div class="coursenavigationHeader">Contacts</div>
          <div class="viereck">&nbsp;</div>
          ${makeContacts(contacts.contacts)}
        </div>
      </div>
    </body>
  </html>
  `;
}

export default makeNewHtml;
