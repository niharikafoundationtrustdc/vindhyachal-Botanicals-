import React from 'react';
import { CartItem } from '../types';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  Send, 
  FileText, 
  ShieldCheck 
} from 'lucide-react';
import { COMPANY_DETAILS } from '../data/products';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  currency: 'INR' | 'USD';
  onUpdateQuantity: (productId: string, packSize: string, newQuantity: number) => void;
  onRemoveItem: (productId: string, packSize: string) => void;
  onClearCart: () => void;
  onOpenQuoteModal: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  currency,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onOpenQuoteModal,
}) => {
  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => {
    const price = currency === 'INR' ? item.selectedPack.priceINR : item.selectedPack.priceUSD;
    return acc + price * item.quantity;
  }, 0);

  const handleWhatsAppCheckout = () => {
    let orderText = `*New Order Request - Vindhyachal Botanicals*\n`;
    orderText += `------------------------------------\n`;
    cartItems.forEach((item, index) => {
      const price = currency === 'INR' ? item.selectedPack.priceINR : item.selectedPack.priceUSD;
      const unit = currency === 'INR' ? '₹' : '$';
      orderText += `${index + 1}. *${item.product.name}*\n`;
      orderText += `   Size: ${item.selectedPack.size} | Qty: ${item.quantity}\n`;
      orderText += `   Rate: ${unit}${price} | Total: ${unit}${price * item.quantity}\n`;
    });
    orderText += `------------------------------------\n`;
    orderText += `*Estimated Subtotal:* ${currency === 'INR' ? '₹' : '$'}${subtotal.toLocaleString()}\n`;
    orderText += `*Destination:* Datia / Global Export\n`;
    orderText += `Please share availability, dispatch timeline, and bank details for payment.`;

    const url = `https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${encodeURIComponent(orderText)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-5 border-b border-stone-200 bg-stone-50 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-emerald-100 text-[#0e632b] flex items-center justify-center">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h2 className="font-brand-serif font-bold text-lg text-stone-900 leading-tight">
                  Your Order &amp; Quotation Cart
                </h2>
                <span className="text-xs text-stone-500">
                  {cartItems.length} unique items selected
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-stone-400 hover:text-stone-700 rounded-full hover:bg-stone-200 transition-colors"
              aria-label="Close cart drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 divide-y divide-stone-100">
            {cartItems.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-stone-100 text-stone-300 flex items-center justify-center mx-auto">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="font-brand-serif font-bold text-stone-800 text-base">
                  Your order list is empty
                </h3>
                <p className="text-xs text-stone-500 max-w-xs mx-auto">
                  Browse our range of Pure Essential Oils, Hydrosols, and Cold-Pressed Carrier Oils to add sample or bulk quantities.
                </p>
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-full bg-[#0e632b] text-white text-xs font-semibold shadow-xs"
                >
                  Explore Products
                </button>
              </div>
            ) : (
              cartItems.map((item) => {
                const itemPrice = currency === 'INR' 
                  ? item.selectedPack.priceINR 
                  : item.selectedPack.priceUSD;

                return (
                  <div key={`${item.product.id}-${item.selectedPack.size}`} className="py-4 flex gap-3.5 items-center">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-16 h-16 rounded-xl object-cover border border-stone-200 shrink-0"
                    />

                    <div className="flex-1 min-w-0">
                      <h4 className="font-brand-serif font-bold text-sm text-stone-900 truncate">
                        {item.product.name}
                      </h4>
                      <p className="text-xs text-emerald-800 font-medium">
                        Pack: {item.selectedPack.size}
                      </p>
                      <p className="text-xs font-bold text-stone-800 mt-0.5">
                        {currency === 'INR' ? `₹${itemPrice.toLocaleString('en-IN')}` : `$${itemPrice.toFixed(2)}`} each
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3 mt-2">
                        <div className="inline-flex items-center border border-stone-200 rounded-lg bg-stone-50">
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, item.selectedPack.size, item.quantity - 1)}
                            className="p-1 text-stone-500 hover:text-stone-800"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 text-xs font-bold text-stone-800">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, item.selectedPack.size, item.quantity + 1)}
                            className="p-1 text-stone-500 hover:text-stone-800"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <span className="text-xs font-bold text-[#0e632b]">
                          = {currency === 'INR' ? `₹${(itemPrice * item.quantity).toLocaleString('en-IN')}` : `$${(itemPrice * item.quantity).toFixed(2)}`}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.product.id, item.selectedPack.size)}
                      className="text-stone-300 hover:text-red-600 transition-colors p-1"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                );
              })
            )}
          </div>

          {/* Footer & Checkout Actions */}
          {cartItems.length > 0 && (
            <div className="p-5 border-t border-stone-200 bg-stone-50 space-y-4">
              <div className="space-y-1.5 text-xs text-stone-600">
                <div className="flex justify-between font-bold text-stone-900 text-base">
                  <span>Estimated Total:</span>
                  <span className="text-[#0e632b]">
                    {currency === 'INR' ? `₹${subtotal.toLocaleString('en-IN')}` : `$${subtotal.toFixed(2)}`}
                  </span>
                </div>
                <p className="text-[11px] text-stone-500">
                  *Taxes, freight and GST calculated based on delivery destination.
                </p>
              </div>

              {/* Order via WhatsApp */}
              <button
                onClick={handleWhatsAppCheckout}
                className="w-full py-3 px-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Order Instantly via WhatsApp</span>
              </button>

              {/* Request Formal Quotation */}
              <button
                onClick={() => {
                  onClose();
                  onOpenQuoteModal();
                }}
                className="w-full py-2.5 px-4 bg-white hover:bg-stone-100 border border-stone-300 text-stone-800 font-semibold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4 text-[#0e632b]" />
                <span>Request Proforma Invoice &amp; COA</span>
              </button>

              <div className="flex items-center justify-between text-[11px] text-stone-500 pt-1">
                <button
                  onClick={onClearCart}
                  className="text-stone-400 hover:text-stone-700 underline"
                >
                  Clear all items
                </button>
                <span className="flex items-center gap-1 text-emerald-700 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  100% Genuine Extracts Guaranteed
                </span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
