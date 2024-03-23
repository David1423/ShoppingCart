import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerLoginComponent } from './seller-login/seller-login.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { AuthGuard } from './auth.guard';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { SellerUpdateProductComponent } from './seller-update-product/seller-update-product.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { SearchComponent } from './search/search.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { UsersComponent } from './admin/users/users.component';
import { ProductsComponent } from './admin/products/products.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { SellersComponent } from './admin/sellers/sellers.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SellerSignupComponent } from './seller-signup/seller-signup.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { TrackingComponent } from './tracking/tracking.component';
import { PaymentGatewayComponent } from './payment-gateway/payment-gateway.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'seller-home', component:SellerHomeComponent, canActivate:[AuthGuard]},
    {path:'seller-addProduct', component:SellerAddProductComponent, canActivate:[AuthGuard]},
    {path:'seller-updateProduct/:id',component:SellerUpdateProductComponent, canActivate:[AuthGuard]},
    {path:'search/:productName',component:SearchComponent},
    {path:'details/:productId', component:ProductDetailsComponent},
    {path:'cart-page', component:CartPageComponent},
    {path:'checkout', component:CheckoutComponent},
    {path:'my-orders', component:MyOrdersComponent},
    {path:'about', component:AboutComponent},
    {path:'contact-us', component:ContactUsComponent},
    {path:'payment-gateway',component:PaymentGatewayComponent},
    {path:'tracking', component:TrackingComponent},
    {path:'', children:[
        {path:'seller-signup', component:SellerSignupComponent},
        {path:'seller-login', component:SellerLoginComponent},
    ]},
    {path:'', children:[
        {path:'user-signup', component:UserSignupComponent},
        {path:'user-login', component:UserLoginComponent},
    ]},


    {path:'', children:[
        {path:'admin-login', component:AdminLoginComponent}
    ]},
    {path:'', children:[
        {path:'admin/users', component:UsersComponent},
        {path:'admin/products', component:ProductsComponent},
        {path:'admin/sellers', component:SellersComponent},
        {path:'admin/orders', component:OrdersComponent}
    ]}
    
];
