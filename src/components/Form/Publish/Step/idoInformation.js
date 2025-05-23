import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DateTimePicker from "@mui/lab/DateTimePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { MenuItem, TextField, Checkbox } from "@mui/material";
import BigNumber from "bignumber.js";
import React from "react";
import { useStoreContext } from "../../../../context/store";
import * as s from "../../../../styles/global";
import { chainRouter } from "../../../../utils/chainInfo";
import { timeout } from "../../../../utils/utils";
import { NumberField } from "../../../FormField";


 Number.prototype.toFixedNoRounding = function(n) {
  const reg = new RegExp("^-?\\d+(?:\\.\\d{0," + n + "})?", "g")
 const a = this.toString().match(reg)[0];
 const dot = a.indexOf(".");
 if (dot === -1) { // integer, insert decimal dot and pad up zeros
     return a + "." + "0".repeat(n);
 }
 const b = n - (a.length - dot) + 1;
 return b > 0 ? (a + "0".repeat(b)) : a;
}

export default function IDOInfo() {
  const context = useStoreContext();

  const {
    isAddLiquidityEnabled: [isAddLiquidityEnabled, setIsAddLiquidityEnabled],
  } = context;

  return (
    <s.Container className="ido-info" flex={1}>
      <s.TextTitle fullWidth className="ido-info-head">IDO Information</s.TextTitle>
      <s.SpacerSmall />
      <s.TextID>
        If I pay 1 {process.env.REACT_APP_CURRENCY} how much token I will get?
      </s.TextID>
      <NumberField
        value={BigNumber(context.tokenRate[0]).toFixed()}
        label={"Token rate"}
        onChange={async (e) => {
          e.preventDefault();
          let val = BigNumber(e.target.value).absoluteValue().toFixed(18);
          if (!isNaN(val)) {
            await timeout(100).then(context.tokenRate[1](val));
          } else {
            await context.tokenRate[1](val);
          }
        }}
      />

      <s.TextIDWarning className="error">{context.idoError["tokenRate"]}</s.TextIDWarning>
      <s.SpacerSmall />
      <s.Container fd={"row"} jc="space-between">
        <s.Container flex={1} style={{ marginLeft: 10, marginRight: 10 }}>
          <NumberField
            value={BigNumber(context.softCap[0]).toFixed()}
            label={"Soft Cap"}
            onChange={(e) => {
              e.preventDefault();
              let val = BigNumber(e.target.value).absoluteValue().toFixed(18);
              if (!isNaN(val)) {
                context.softCap[1](val);
              } else {
                context.softCap[1]("");
              }
            }}
          />
          <s.TextIDWarning className="error">{context.idoError["softCap"]}</s.TextIDWarning>
          <s.SpacerSmall />
          <NumberField
            value={BigNumber(context.hardCap[0]).toFixed()}
            label={"Hard Cap"}
            onChange={(e) => {
              e.preventDefault();
              let val = BigNumber(e.target.value).absoluteValue().toFixed(18);
              if (!isNaN(val)) {
                context.hardCap[1](val);
              } else {
                context.hardCap[1]("");
              }
            }}
          />
          <s.TextIDWarning className="error">{context.idoError["hardCap"]}</s.TextIDWarning>
          <s.SpacerSmall />
          <s.Container ai="center" fd="row" jc="center">
            <s.TextDescription>Enable auto liquidity on the DEX?</s.TextDescription>
            <Checkbox
              value={isAddLiquidityEnabled}
              onChange={() => setIsAddLiquidityEnabled(!isAddLiquidityEnabled)}
            />
          </s.Container>
          {/* <TextField
            value={context.router[0]}
            onChange={(e) => {
              e.preventDefault();
              context.router[1](e.target.value);
            }}
            select
            fullWidth
            displayEmpty
            label="Router"
          >
            {chainRouter[process.env.REACT_APP_networkID].map((item, index) => {
              return <MenuItem value={index}>{item.name}</MenuItem>;
            })}
          </TextField>
          <s.TextIDWarning>{context.idoError["router"]}</s.TextIDWarning> */}
        </s.Container>
        <s.Container flex={1} style={{ marginLeft: 10, marginRight: 10 }}>
          <NumberField
            value={BigNumber(context.minETH[0]).toFixed()}
            label={"Minimum Buy"}
            onChange={(e) => {
              e.preventDefault();
              let val = BigNumber(e.target.value).absoluteValue().toFixed(18);
              if (!isNaN(val)) {
                context.minETH[1](val);
              } else {
                context.minETH[1]("");
              }
            }}
          />
          <s.TextIDWarning className="error">{context.idoError["minETH"]}</s.TextIDWarning>
          <s.SpacerSmall />
          <NumberField
            value={BigNumber(context.maxETH[0]).toFixed()}
            label={"Maximum Buy"}
            onChange={(e) => {
              e.preventDefault();
              let val = BigNumber(e.target.value).absoluteValue().toFixed(18);
              if (!isNaN(val)) {
                context.maxETH[1](val);
              } else {
                context.maxETH[1]("");
              }
            }}
          />
          <s.TextIDWarning className="error">{context.idoError["maxETH"]}</s.TextIDWarning>
          <s.SpacerSmall />
          {
            isAddLiquidityEnabled && <>
              <NumberField
                value={BigNumber(context.liquidityPercentage[0]).toFixed()}
                label={"Liquidity % (51% - 100%)"}
                onChange={(e) => {
                  e.preventDefault();
                  let val = BigNumber(e.target.value).absoluteValue().toFixed(18);
                  if (!isNaN(val)) {
                    context.liquidityPercentage[1](val);
                  } else {
                    context.liquidityPercentage[1]("");
                  }
                }}
              />
              <s.TextIDWarning className="error">
                {context.idoError["liquidityPercentage"]}
              </s.TextIDWarning>
            </>
          }
        </s.Container>
      </s.Container>
      <s.SpacerSmall />
      {
        isAddLiquidityEnabled && <>
          <s.TextID>
            If I pay 1 {process.env.REACT_APP_CURRENCY} how much token I will get
            after presale?
          </s.TextID>
          <NumberField
            value={BigNumber(context.listingRate[0]).toFixed()}
            label={"Listing Rate"}
            onChange={(e) => {
              e.preventDefault();
              let val = BigNumber(e.target.value).absoluteValue().toFixed(18);
              if (!isNaN(val)) {
                context.listingRate[1](val);
              } else {
                context.listingRate[1]("");
              }
            }}
          />
          <s.TextIDWarning className="error">{context.idoError["listingRate"]}</s.TextIDWarning>
          <s.SpacerMedium />
        </>
      }
      <s.Container fd={"row"} jc="space-between">
        <s.Container flex={1} style={{ marginLeft: 10, marginRight: 10 }}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
              renderInput={(props) => <TextField fullWidth {...props} />}
              label="Start date"
              displayEmpty
              value={context.start[0]}
              onChange={(e) => {
                context.start[1](e);
              }}
            />
          </LocalizationProvider>
        </s.Container>
        <s.Container flex={1} style={{ marginLeft: 10, marginRight: 10 }}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
              renderInput={(props) => <TextField fullWidth {...props} />}
              label="End date"
              displayEmpty
              value={context.end[0]}
              onChange={(e) => {
                context.end[1](e);
              }}
            />
          </LocalizationProvider>
        </s.Container>
      </s.Container>
      <s.TextIDWarning className="error">{context.idoError["start-end"]}</s.TextIDWarning>
      <s.SpacerMedium />
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateTimePicker
          renderInput={(props) => <TextField fullWidth {...props} />}
          label="Unlock date"
          displayEmpty
          value={context.unlock[0]}
          onChange={(e) => {
            context.unlock[1](e);
          }}
        />
      </LocalizationProvider>
      <s.TextIDWarning className="error">{context.idoError["unlock"]}</s.TextIDWarning>
    </s.Container>
  );
}
