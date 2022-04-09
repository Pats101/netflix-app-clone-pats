import "./Table.scss";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List = () => {
    const rows = [
        {
            id: 12351535,
            product: "Acer Nitro 5",
            img: "https://www.notebookcheck.net/fileadmin/_processed_/3/b/csm_Acer_Nitro_5_8_3c47bffaf4.jpg",
            customer: "Mali Mg",
            date: "1 March",
            amount: 758,
            method: "Cash on Delivery",
            status: "Pending",
        },
        {
            id: 12300135,
            product: "Apple ipods",
            img: "https://www.incredible.co.za/media/catalog/product/cache/7ce9addd40d23ee411c2cc726ad5e7ed/a/p/apple_1__1339.jpg",
            customer: "Tavo Mj",
            date: "1 March",
            amount: 2799,
            method: "Cash on Delivery",
            status: "Approved",
        },
        {
            id: 12359135,
            product: "Monitor Dell",
            img: "https://i.ebayimg.com/images/g/64YAAOSwm0FiHqiP/s-l640.jpg",
            customer: "Tonde Gm",
            date: "1 March",
            amount: 3999,
            method: "Cash on Delivery",
            status: "Pending",
        },
        {
            id: 12327135,
            product: "Playstation 5",
            img: "https://i.pcmag.com/imagery/articles/04sm5ZrVNOuVO5uPhkvAqFX-1..v1591915671.jpg",
            customer: "Nkosiyapha Gx",
            date: "1 March",
            amount: 4999,
            method: "Cash on Delivery",
            status: "Declined",
        },
        {
            id: 12086135,
            product: "Huawei nova 7i",
            img: "https://d1rlzxa98cyc61.cloudfront.net/catalog/product/cache/1801c418208f9607a371e61f8d9184d9/1/7/170982_2020_2.jpg",
            customer: "Popi Mc",
            date: "1 March",
            amount: 13899,
            method: "Cash on Delivery",
            status: "Approved",
        },
        {
            id: 12397135,
            product: "Samsung",
            img: "https://zadranhandyshop.com/wp-content/uploads/2021/07/Samsung-Galaxy-A51-promo-video-snapshot-.jpg",
            customer: "Pace Gm",
            date: "1 March",
            amount: 13999,
            method: "Cash on Delivery",
            status: "Approved",
        },
        {
            id: 12586135,
            product: "Range Rover",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/2019_Land_Rover_Range_Rover_Evoque_R-Dynamic_2.0.jpg/1200px-2019_Land_Rover_Range_Rover_Evoque_R-Dynamic_2.0.jpg",
            customer: "Aphelele Mp",
            date: "1 March",
            amount: 995235,
            method: "Cash on Delivery",
            status: "Approved",
        },
    ]
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
                <TableCell className="tableCell">Tracking ID</TableCell>
                <TableCell className="tableCell">Product</TableCell>
                <TableCell className="tableCell">Customer</TableCell>
                <TableCell className="tableCell">Date</TableCell>
                <TableCell className="tableCell">Amount</TableCell>
                <TableCell className="tableCell">Payment Method</TableCell>
                <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                  <div className="cellWrapper">
                      <img src={row.img} alt="" className="image"/>
                      {row.product}
                  </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                  <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default List