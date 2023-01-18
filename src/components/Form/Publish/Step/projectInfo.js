import { TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import { FaImage } from "react-icons/fa";
import { useStoreContext } from "../../../../context/store";
import * as s from "../../../../styles/global";


export default function ProjectInfo() {
  const [website, setWebsite] = useState(true);
  const [discord, setDiscord] = useState(true);
  const [twitter, setTwitter] = useState(true);
  const [iconSize, setIconSize] = useState(true)

  const [bannerSize, setBannerSize] = useState(true)
  const [logoMessage, setLogomessage] = useState("")
  const [bannerMessage, setBannermessage] = useState("");
  const [websiteMessage, setWebsiteMessage] = useState(true);
  const [discordMessage, setDiscordMessage] = useState(true);
  const [twitterMessage, setTwittereMessage] = useState(true);

  const context = useStoreContext();

  const isValidHttpUrl = (string) => {
    let url;
    try {
      url = new URL(string);
      setWebsite(url)
    } catch (_) {
      return false;
    }
    return url.protocol === "http:" || url.protocol === "https:";
  }

  const isValidHttpUrlDiscard = (string) => {
    let url;
    try {
      url = new URL(string);
      setDiscord(url)
    } catch (_) {
      return false;
    }
    return url.protocol === "http:" || url.protocol === "https:";
  }

  const isValidHttpUrlTwitter = (string) => {
    let url;
    try {
      url = new URL(string);
      setTwitter(url)
    } catch (_) {
      return false;
    }
    return url.protocol === "http:" || url.protocol === "https:";
  }


  // console.log("context>>>>",context)
  return (
    <s.Container flex={1} ai="center">
      <s.TextTitle className="ido-info-head">Project Information</s.TextTitle>
      <div style={{ display: 'flex', marginBottom: '10px' }}>
        <s.Container ai="center">
          <div
            style={{
              display: "flex",
              width: 140,
              height: 140,
              borderRadius: 20,
              margin: 20,
              backgroundColor: "var(--upper-card)",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: 'column'

            }}
          >
            <s.iconUpload
              type="file"
               required
              accept="image/png, image/jpeg"
              onChange={(e) => {
                e.preventDefault();
                let iSizes = e.target.files[0].size / 1024
                let sizeIcon = (Math.round(iSizes * 100) / 100)
                // console.log("sizeIcon", sizeIcon)

                if (sizeIcon <= 6) {
                  // console.log("less than 6kb")
                  context.validImage[1](false)
                  const file = e.target.files[0];
                  context.validImage[1](file);
                  setIconSize(true)
                  setLogomessage(false);
                }
                else {
                  context.validImage[1](true)
                  setLogomessage(true);
                  setIconSize(false)
                }
                const file = e.target.files[0];
                context.icon[1](file);
              }}

            ></s.iconUpload>

            {
              context.icon[0] !== "" ? (
                <img
                  style={{ width: 100, height: 100, borderRadius: 20 }}
                  src={URL.createObjectURL(context.icon[0])}
                />
              ) : (
                <FaImage style={{ width: 100, height: 100, padding: 20 }} />
              )}
            <span>Upload Logo</span>

          </div>
          {/* <s.TextIDWarning className="error">{context.projectInfoError["validImage"]}</s.TextIDWarning> */}
          {logoMessage ? <span className="error">Icon size must be less than 6 kb</span> : null}
        </s.Container>
        <s.Container ai="center">
          <div
            style={{
              display: "flex",
              width: 140,
              height: 140,
              borderRadius: 20,
              margin: 20,
              backgroundColor: "var(--upper-card)",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: 'column'
            }}
          >
            <s.iconUpload
              type="file"
              required
              accept="image/png, image/jpeg"
              onChange={(e) => {
                e.preventDefault();
                let sizes = e.target.files[0].size / 1024
                let sizeBanner = (Math.round(sizes * 100) / 100)

                if (sizeBanner > 140) {
                  context.validBanner[1](false);
                  const file = e.target.files[0];
                  context.banner[1](file);
                  setBannermessage(false)
                  setBannerSize(e.target.files[0].sizeBanner)

                }
                else {
                  context.validBanner[1](true);
                  setBannermessage(true)
                  setBannerSize(false)
                }
                const file = e.target.files[0];
                context.banner[1](file);
              }}
            >
            </s.iconUpload>

            {context.banner[0] !== "" ? (
              <img
                style={{ width: 100, height: 100, borderRadius: 20 }}
                src={URL.createObjectURL(context.banner[0])}
              />
            ) : (
              <FaImage style={{ width: 100, height: 100, padding: 20 }} />
            )}
            <span>Upload Banner</span>
          </div>
          
          {bannerMessage ? <span className="error">Banner size must be greater than 140 kb </span> : null}
        </s.Container>
      </div>

      <TextField
        fullWidth
        required
        id="text"
        label="Description"
        multiline
        rows={4}
        value={context.description[0]}
        maxLength="1000"
        onChange={(e) => {
          e.preventDefault();
          context.description[1](e.target.value);
        }}
      ></TextField>
      <s.SpacerSmall />
      <TextField
        fullWidth
        id="website"
        label="Website"
        value={context.website[0]}
        onChange={(e) => {
          e.preventDefault();
          if (e.target.value.length > 0) {
            let abc = isValidHttpUrl(e.target.value)
            context.website[1](e.target.value);
            context.validWebsite[1](abc);
            setWebsiteMessage(abc)
            console.log("ravi")
          } else {
            let abc = isValidHttpUrl(e.target.value)
            context.website[1](e.target.value);
            context.validWebsite[1](true);
            setWebsiteMessage(true)
            console.log("test")
          }

        }}
      ></TextField>
      {!websiteMessage ? <span className="error">Invalid website url</span> : null}
      <s.SpacerSmall />
      <TextField
        fullWidth
        value={context.discord[0]}
        id="discord"
        label="Discord"
        onChange={(e) => {
          e.preventDefault();
          let dataDiscord = isValidHttpUrlDiscard(e.target.value)
          context.discord[1](e.target.value);
          context.validDiscord[1](dataDiscord)

          if (e.target.value.length > 0) {
            let abc = isValidHttpUrl(e.target.value)
            context.discord[1](e.target.value);
            context.validDiscord[1](abc);
            setDiscordMessage(abc)

          } else {
            let abc = isValidHttpUrl(e.target.value)
            context.discord[1](e.target.value);
            context.validDiscord[1](true);
            setDiscordMessage(true)
          }
        }}
      ></TextField>
      {!discordMessage ? <span className="error">Invalid  discord url</span> : null}
      <s.SpacerSmall />
      {/* <TextField
        fullWidth
        value={context.telegram[0]}
        id="telegram"
        label="Telegram"
        onChange={(e) => {
          e.preventDefault();
          context.telegram[1](e.target.value);
        }}
      ></TextField> */}

      {/* <s.SpacerSmall /> */}
      <TextField
        fullWidth
        id="twitter"
        label="Twitter"
        value={context.twitter[0]}
        onChange={(e) => {
          e.preventDefault();
          if (e.target.value.length > 0) {
            let abc = isValidHttpUrl(e.target.value)
            context.twitter[1](e.target.value);
            context.validTwitter[1](abc);
            setTwittereMessage(abc)
          } else {
            let abc = isValidHttpUrl(e.target.value)
            context.twitter[1](e.target.value);
            context.validTwitter[1](true);
            setTwittereMessage(true)
          }
        }}
      ></TextField>
      {!twitterMessage ? <span className="error">Invalid  twitter url</span> : null}
    </s.Container>
  );
}
