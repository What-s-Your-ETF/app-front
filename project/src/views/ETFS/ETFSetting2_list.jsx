import React from "react";
import { Table } from "react-bootstrap";

export default function KOSPI({
  list_kospi200,
  pagePrice,
  ETFlist = [],
  check,
}) {
  return (
    <div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th style={{ width: "100px" }}>선택</th>
            <th style={{ width: "200px" }}>상품</th>
            <th style={{ width: "100px" }}>최종가</th>
            <th colSpan="4" style={{ width: "400px" }}>
              수익률
            </th>
          </tr>
          <tr>
            <td style={{ height: "50px" }}></td>
            <td></td>
            <td></td>
            <th style={{ width: "100px" }}>1달전</th>
            <th style={{ width: "100px" }}>3달전</th>
            <th style={{ width: "100px" }}>6달전</th>
            <th style={{ width: "100px" }}>1년전</th>
          </tr>
        </thead>
        <tbody>
          {pagePrice &&
            pagePrice.map(
              (item, index) =>
                !item.hidden && (
                  <React.Fragment key={item.stockItem}>
                    <tr>
                      <td style={{ height: "50px" }}>
                        <input
                          type="checkbox"
                          onChange={() => check(item)}
                          checked={ETFlist.some(
                            (listItem) => listItem.name === item.stockItem.name
                          )}
                        />
                      </td>
                      <td>{list_kospi200[index]?.name}</td>
                      {list_kospi200.length < pagePrice.length ? null : (
                        <>
                          <td>{item.endPrice}</td>
                          <td
                            style={{
                              color:
                                item.returnTrend["0"].rate > 0 ? "red" : "blue",
                            }}
                          >
                            {Math.round(
                              Number(item.returnTrend["0"].rate.toFixed(4)) *
                                100,
                              2
                            )}
                            %
                          </td>
                          <td
                            style={{
                              color:
                                item.returnTrend["1"].rate > 0 ? "red" : "blue",
                            }}
                          >
                            {Math.round(
                              Number(item.returnTrend["1"].rate.toFixed(4)) *
                                100,
                              2
                            )}
                            %
                          </td>
                          <td
                            style={{
                              color:
                                item.returnTrend["2"].rate > 0 ? "red" : "blue",
                            }}
                          >
                            {Math.round(
                              Number(item.returnTrend["2"].rate.toFixed(4)) *
                                100
                            )}
                            %
                          </td>
                          <td
                            style={{
                              color:
                                item.returnTrend["3"].rate > 0 ? "red" : "blue",
                            }}
                          >
                            {Math.round(
                              Number(item.returnTrend["3"].rate.toFixed(4)) *
                                100,
                              2
                            )}
                            %
                          </td>
                        </>
                      )}
                    </tr>
                  </React.Fragment>
                )
            )}
        </tbody>
      </Table>
    </div>
  );
}
