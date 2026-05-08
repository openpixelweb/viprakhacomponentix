import Wrapper from "@/layout/wrapper";
import Breadcrumb from "../../components/breadcrumb/breadcrumb";

const CouponDynamicPage = () => {
  return (
    <Wrapper>
      <div className="body-content px-8 py-8 bg-slate-100">
        <Breadcrumb title="Coupon" subtitle="Removed" />
        <div className="bg-white rounded-md p-8">
          <h3 className="text-xl font-semibold mb-2">Coupons Removed</h3>
          <p>Coupon editing has been removed from admin.</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default CouponDynamicPage;