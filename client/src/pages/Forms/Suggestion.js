import { GenericLayout } from '../Layout';
import './Form.css';
import { Multiselect } from "multiselect-react-dropdown";
import React, { useState } from "react";
import SuggestPopUp from '../../components/SuggestPopUp';

export function SuggestionPage() {
  const languageChoices = [
    { Language: "English", id: 1 },
    { Language: "Mandarin", id: 2 },
    { Language: "Hokkien", id: 3 },
    { Language: "Teochew", id: 4 },
    { Language: "Malay", id: 5 },
    { Language: "Tamil", id: 6 },
  ]

  const regionChoices = [
    { Region: "North", id: 1 },
    { Region: "East", id: 2 },
    { Region: "South", id: 3 },
    { Region: "West", id: 4 },
    { Region: "Central", id: 5 },

  ]

  const [languagesOptions] = useState(languageChoices);
  const [regionOptions] = useState(regionChoices);

  const [storeName, setStoreName] = useState(0);
  const [hawkerCentre, setHawkerCentre] = useState(0);
  const [address, setAddress] = useState(0);
  const [region, setRegion] = useState(0);
  const [hawkerName, setHawkerName] = useState(0);
  const [hawkerPhoneNumber, setHawkerPhoneNumber] = useState(0);
  const [languages, setLanguages] = useState([]);
  const [reasonForHelp, setReasonForHelp] = useState(0);
  const [othersFieldSelected, setOthersFieldSelected] = useState(0);

  function onSelectLanguages(selectedList, selectedItem) {
    setLanguages(selectedList.map((lang) => lang.Language));
  }

  function onSelectRegion(selectedList, selectedItem) {
    setRegion(selectedItem.Region);
  }

  function setOthersField(text) {
    if (othersFieldSelected) {
      setReasonForHelp(text);
    }
  }

  return (
    <body>
      <GenericLayout id={1} />

      {/* Left side panel */}
      <section className="suggestion-info">
        <div className="info-content">
          {/* <p className="info-header">SUGGEST A HAWKER</p>
          <p className="info-text">Do you know a hawker who is…</p>
          <ul className="info-point">
            <li>IT-illiterate?</li>
            <li>Has limited proficiency in  English or Chinese?</li>
          </ul>
          <p className="info-text">Or simply needs <b>help registering on food delivery platforms?</b> </p>

          <p className="info-text"> <b>Help us reach out to them</b> </p>

       <br /> */}

        </div>
      </section>

      {/* Start of form */}
      <section className="form-content">
        <form action="POST">
          <span class="label" for="stall">Name of hawker stall</span>
          <input type="form-text" id="stall" onChange={(e) => setStoreName(e.target.value)}></input>

          <p>
            <span class="label" for="centre">Name of hawker centre</span>
            <input type="form-text" id="centre" onChange={(e) => setHawkerCentre(e.target.value)}></input>
          </p>

          <p>
            <span class="label" for="address">Address</span>
            <input type="form-text" id="address" onChange={(e) => setAddress(e.target.value)}></input>
          </p>

          <p><span class="label" for="address">Region</span></p>
          <Multiselect
            options={regionOptions}
            displayValue="Region"
            singleSelect
            placeholder="Region"
            onSelect={onSelectRegion}
          />

          <p>
            <span class="label" for="name">Hawker's name</span>
            <input type="form-text" id="name" onChange={(e) => setHawkerName(e.target.value)}></input>
          </p>

          <p>
            <span class="label" for="number">Hawker's phone number</span>
            <input type="form-text" id="number" onChange={(e) => setHawkerPhoneNumber(e.target.value)}></input>
          </p>

          <p>
            <span class="label" for="help">Could you explain why this hawker would require our help?</span>
          </p>

          <div className="reason-radio">
            <input type="radio" value="IT-illiterate" name="help" onChange={(e) => {setReasonForHelp(e.target.value); setOthersFieldSelected(false)}} /> IT-illiterate
            </div>
          <div className="reason-radio">
            <input type="radio" value="Lack of proficiency in English/Chinese to sign-up" name="help" onChange={(e) => {setReasonForHelp(e.target.value); setOthersFieldSelected(false)}} /> Lack of proficiency in English/Chinese to sign-up
            </div>
          <div className="reason-radio">
            <input type="radio" value="Others" name="help" onChange={() => setOthersFieldSelected(true)}/> Others
            </div>

          <p>
            <span class="label" for="help">If others, please specify: </span>
            <input type="form-text" id="help" name="help" onChange={setOthersField}></input>
          </p>

          <p>
            <span class="label" for="languages">What language(s), including dialects, can this Hawker speak?</span>
            <Multiselect
              options={languagesOptions}
              displayValue="Language"
              showCheckbox={true}
              placeholder="Language(s)"
              closeOnSelect={false}
              onSelect={onSelectLanguages}
              onRemove={onSelectLanguages}
            />
          </p>
          <SuggestPopUp storeName={storeName}
            hawkerCentre={hawkerCentre}
            address={address}
            region={region}
            hawkerName={hawkerName}
            hawkerPhoneNumber={hawkerPhoneNumber}
            languages={languages}
            reasonForHelp={reasonForHelp}/> 
        </form>
      </section>
    </body>
  );
}