import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  import { items } from "../_const/dummysimple";

  const RecentPositions = () => {
    return (
      <div className="flex flex-col justify-start items-start rounded-3xl pt-8 px-8 bg-white overflow-auto">
        <div className="text-black font-bold text-2xl">Recent Positions</div>
        <Table >
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Position</TableHead>
              <TableHead>Application</TableHead>
              <TableHead>Method</TableHead>
              <TableHead>Method</TableHead>

              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody >
            {items.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{item.title}</TableCell>
                <TableCell>{item.application}</TableCell>
                <TableCell>{item.method}</TableCell>
                <TableCell>{item.method}</TableCell>

                <TableCell className="text-right">${item.amount.toFixed(2)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  };
  
  export default RecentPositions;
  