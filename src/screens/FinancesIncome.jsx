import React from 'react'
import MainLayout from '../layouts/MainLayout'

const dummyData = [
  {
    invoiceNumber: "AA-04-19-1890",
    date: "18 May 2019",
    imgUrl: "./assets/img/invoices-1.png",
    name: "Sophia Wagner",
    isPaid: true,
    price: 1890
  },
  {
    invoiceNumber: "AA-04-19-1890",
    date: "18 May 2019",
    imgUrl: "./assets/img/invoices-1.png",
    name: "Sophia Wagner",
    isPaid: false,
    price: 1890
  },
  {
    invoiceNumber: "AA-04-19-1890",
    date: "18 May 2019",
    imgUrl: "./assets/img/invoices-1.png",
    name: "Sophia Wagner",
    isPaid: false,
    price: 1890
  },
  {
    invoiceNumber: "AA-04-19-1890",
    date: "18 May 2019",
    imgUrl: "./assets/img/invoices-1.png",
    name: "Sophia Wagner",
    isPaid: true,
    price: 1890
  },
  {
    invoiceNumber: "AA-04-19-1890",
    date: "18 May 2019",
    imgUrl: "./assets/img/invoices-1.png",
    name: "Sophia Wagner",
    isPaid: true,
    price: 1890
  },
  {
    invoiceNumber: "AA-04-19-1890",
    date: "18 May 2019",
    imgUrl: "./assets/img/invoices-1.png",
    name: "Sophia Wagner",
    isPaid: true,
    price: 1890
  },
  {
    invoiceNumber: "AA-04-19-1890",
    date: "18 May 2019",
    imgUrl: "./assets/img/invoices-1.png",
    name: "Sophia Wagner",
    isPaid: true,
    price: 1890
  },
]

const FinancesIncome = () => {
  return (
    <>
      <MainLayout
        headVector="./assets/vectors/nav-5__active.svg"
        sideNavVector="./assets/vectors/sidenav-right-2.svg"
        title={"Invoices List"}
        minimalNavRight
        exploreSub="Services &amp; Request Assign to you"
        exploreContent={[
          {
            time: "11:30",
            title: "Oil Change",
            sub: "Ford Focus 2021",
          },
          {
            time: "11:45",
            title: "Engine + AC Check up",
            sub: "Chevroley Cruze 2020",
          },
          {
            time: "13:00",
            title: "Broken Light",
            sub: "Honda Civic 2021",
          },
        ]}
      >
        <div className="finances-invoice-main-content">
          <div className="container-fluid">
            <div className="d-flex align-items-center justify-content-end ">
              <div className="tabs">
                <div className="tab active d-flex align-items-center justify-content-between gap-4"><img src="./assets/vectors/invoices.svg" alt="" /> <span> Invoices </span></div>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-between py-5">
              <div>
                <input type="text" placeholder='Search into the list...' />
              </div>
              <div className="add-new-btn d-flex gap-3 align-items-center py-3">
                <img src="./assets/vectors/plus.svg" alt="" />
                <p>ADD NEW</p>
              </div>
            </div>
            {
              dummyData.map((data) => {
                return (
                  <div className="row align-items-center py-3 dummy-data">
                    <div className="col-3 invoice-details d-flex align-items-center gap-3"> <div className='box'></div> <p className='invoice-number'>{data.invoiceNumber}</p></div>
                    <div className="col-2 font-weight-bold date">{data.date}</div>
                    <div className="col-3 d-flex align-items-center gap-3 pic-name">
                      <img src={data.imgUrl} alt="" />
                      <p>{data.name}</p>
                    </div>
                    <div className="col-2 is-paid">
                      <div className={data.isPaid ? "paid" : "unpaid"}>
                        {data.isPaid ? "Paid" : "Unpaid"}
                      </div>
                    </div>
                    <div className="col-1 price">{data.price}.00$</div>
                    <div className="col-1 d-flex align-items-center justify-content-center">
                      <div className="del p-2">
                        <img src="./assets/vectors/delete.svg" alt="" />
                      </div>
                    </div>
                  </div>
                )
              })
            }
            <div className="row">
              <div className="col-12">
                <div className="pagination mt-5 d-flex justify-content-between">
                  <button className="btn nav-btn prev">PREV</button>
                  <div className="pages">
                    <button className="btn page-button">1</button>
                    <button className="btn page-button">2</button>
                    <button className="btn page-button">3</button>
                    <button className="btn page-button">4</button>
                    <button className="btn page-button active">6</button>
                  </div>
                  <button className="btn nav-btn next">PREV</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  )
}

export default FinancesIncome
