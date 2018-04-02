import { getAllProducts } from "../store/StoreService";
import {productActions, PRODUCTS_FETCH_SUCCESS} from "./ProductActions";

jest.mock("../store/StoreService");


describe('product actions', () => {
    const products = [{
        id: 1
    }];
    const storeId = 1;
    const dispatch = jest.fn();
    it('should call store service and dispatch actions', async () => {
        getAllProducts.mockReturnValue(products);
        await productActions.getAllProducts(storeId)(dispatch);
        expect(getAllProducts).toHaveBeenCalledWith(storeId);
        expect(dispatch).toHaveBeenCalledWith({
            type: PRODUCTS_FETCH_SUCCESS,
            products
        });
    });
    it('should not dispatch actions in case of error', async () => {
        dispatch.mockClear();
        const err = new Error("Error test");
        getAllProducts.mockImplementation(() => Promise.reject(err));
        expect(productActions.getAllProducts(storeId)(dispatch)).rejects.toBe(err);
        expect(getAllProducts).toHaveBeenCalledWith(storeId);
        expect(dispatch).not.toHaveBeenCalled();
    });
});