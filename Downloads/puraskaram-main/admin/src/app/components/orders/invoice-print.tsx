import React from "react";
import Image from "next/image";
import { Order } from "@/types/order-amount-type";
import dayjs from "dayjs";

type IPropType = {
  orderData: Order;
};

const formatMoney = (value: number | string | undefined) =>
  Number(value || 0).toFixed(2);

const InvoicePrint = ({ orderData }: IPropType) => {
  const subtotal =
    typeof orderData.subTotal === "number"
      ? Number(orderData.subTotal)
      : orderData.cart.reduce(
          (acc: number, curr: any) =>
            acc + Number(curr.price || 0) * Number(curr.orderQuantity || 1),
          0
        );

  const shipping = Number(orderData.shippingCost || 0);
  const discount = Number(orderData.discount || 0);

  const grand_total =
    typeof orderData.totalAmount === "number"
      ? Number(orderData.totalAmount)
      : subtotal + shipping - discount;

  return (
    <div className="p-8 bg-white text-[#1e2a39]">
      <div className="flex items-center justify-between border-b border-slate-200 pb-6 mb-8">
        <div>
          <Image
            src="/assets/img/logo/maathrey-logo.png"
            alt="Maathrey Wellness"
            width={170}
            height={60}
            className="mb-3 h-auto w-auto"
          />
          <p className="mb-0 text-sm">Hyderabad, Telangana</p>
          <p className="mb-0 text-sm">9381328833</p>
        </div>

        <div className="text-right">
          <p className="text-sm uppercase tracking-[0.2em] text-sky-500 font-semibold mb-2">
            Order Receipt
          </p>
          <h2 className="text-3xl font-bold mb-2">Invoice</h2>
          <p className="text-sm mb-1">
            <strong>Invoice No:</strong> {orderData.invoice}
          </p>
          <p className="text-sm">
            <strong>Date:</strong> {dayjs(orderData.createdAt).format("DD/MM/YYYY")}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6 mb-8">
        <div className="col-span-12">
          <div className="border border-slate-200 rounded-xl p-6">
            <span className="block text-xs uppercase tracking-[0.18em] text-sky-500 font-semibold mb-3">
              Invoice To
            </span>
            <h4 className="text-xl font-semibold mb-2">{orderData?.user?.name}</h4>
            <p className="mb-0 text-sm">{orderData.contact}</p>
            <p className="mb-0 text-sm">{orderData.address}</p>
            <p className="mb-0 text-sm">{orderData.city}</p>
          </div>
        </div>
      </div>

      <div className="border border-slate-200 rounded-xl overflow-hidden mb-8">
        <table className="w-full text-sm text-left">
          <thead className="bg-sky-50">
            <tr>
              <th className="px-4 py-3 font-semibold">Product</th>
              <th className="px-4 py-3 font-semibold text-end">Quantity</th>
              <th className="px-4 py-3 font-semibold text-end">Total</th>
            </tr>
          </thead>
          <tbody>
            {orderData.cart.map((p: any) => (
              <tr key={p._id} className="border-t border-slate-200">
                <td className="px-4 py-4">{p.title}</td>
                <td className="px-4 py-4 text-end">{p.orderQuantity}</td>
                <td className="px-4 py-4 text-end">
                  ₹{(Number(p.orderQuantity || 0) * Number(p.price || 0)).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-12 gap-6 mb-8">
        <div className="col-span-12 md:col-span-6">
          <div className="border border-slate-200 rounded-xl p-5">
            <h5 className="font-semibold mb-4">Order Summary</h5>
            <div className="flex justify-between py-2 border-b border-slate-100">
              <span>Subtotal</span>
              <span>₹{formatMoney(subtotal)}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-slate-100">
              <span>Shipping Cost</span>
              <span>₹{formatMoney(shipping)}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-slate-100">
              <span>Discount</span>
              <span>₹{formatMoney(discount)}</span>
            </div>
            <div className="flex justify-between py-3 font-bold text-lg">
              <span>Grand Total</span>
              <span>₹{formatMoney(grand_total)}</span>
            </div>
          </div>
        </div>

        <div className="col-span-12 md:col-span-6">
          <div className="border border-slate-200 rounded-xl p-5">
            <h5 className="font-semibold mb-4">Payment Details</h5>
            <div className="flex justify-between py-2 border-b border-slate-100">
              <span>Payment Method</span>
              <span>{orderData.paymentMethod}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-slate-100">
              <span>Invoice No</span>
              <span>{orderData.invoice}</span>
            </div>
            <div className="flex justify-between py-2">
              <span>No of Items</span>
              <span>{orderData.cart.length}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center border-t border-slate-200 pt-6">
        <h3 className="text-lg font-medium mb-0">Thank you for your order. Come again!</h3>
      </div>
    </div>
  );
};

export default InvoicePrint;