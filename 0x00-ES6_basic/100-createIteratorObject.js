export default function createIteratorObject (report) {
  let reportResult = [];
  for (const value of Object.values(report.allEmployees)) {
    reportResult = [...reportResult, ...value];
  }
  return reportResult;
}
