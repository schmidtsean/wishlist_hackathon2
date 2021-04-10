class Api::WishlistsController < ApplicationController

  def index
    render json: current_user.wishlists
  end

  def create 
    @wishlist = current_user.wishlist.new(wishlist_params)
    if @wishlist.save
      render json: @wishlist
    else
      render json: { errors: @wishlist.errors}, status: :unprocessable_entity
    end
  end

  def update 
    @wishlist = current_user.wishlist.find(params[:id])
    if @wishlist.update(wishlist_params)
      render json: @wishlist
    else
      render json: { errors: @wishlist.errors}, status: :unprocessable_entity
    end
  end

  def destroy 
    @wishlist = current_user.tacos.find(params[:id])
    @wishlist.destroy
    render json: { message: 'wishlist deleted' }
  end

  private 
    def wishlist_params
      params.require(:wishlist).permit(:name, :description)
    end
end