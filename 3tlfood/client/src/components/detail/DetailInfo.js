import React from 'react';
import { useDispatch } from 'react-redux';
import {AddToCart} from '../../actions/CartAction'
import {Link} from 'react-router-dom'
import {formatPrice} from '../../untils/index'

function DetailInfo(props) {
    const dispatch = useDispatch()
    const { product } = props;
    
    function handleAddProduct(product) {
        const action = AddToCart(product)
        dispatch(action)
    }

    return (
        <div className="detail-info-right">
            <div className="detail-info-right-price">
                <p className="price-box">
                    <span className="saleprice">{formatPrice(product.salePrice)}đ</span>
                    <span className="old-price">Giá niêm yết : <strong className="price">{formatPrice(product.price)}đ</strong> </span>
                </p>
                <p className="detail-info-sale">
                    KHUYẾN MÃI CUỐI TUẦN - Nhanh tay đặt món!
                            </p>
            </div>

            <div className="detail-info-right-buy">
                <div className="detail-info-right-buy-now">
                    <Link to="/cart" onClick={() => handleAddProduct(product)}>
                        <strong>ĐẾN NGAY</strong>
                        <br></br>
                        <span>(Giao tận nơi hoặc lấy tại cửa hàng)</span>
                    </Link>
                </div>
                <div className="detail-info-right-buy-installment">
                    <a href="">
                        <strong>MÓN NGON</strong>
                        <br></br>
                        <span>(Xét duyệt qua món ăn)</span>
                    </a>
                    {/* <a href="">
                        <strong>TRẢ TIỀN QUA THẺ</strong>
                        <br></br>
                        <span>(Visa, Master, JCB)</span>
                    </a> */}
                </div>
            </div>
        </div>
    );
}

export default DetailInfo;