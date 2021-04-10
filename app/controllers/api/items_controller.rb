class Api::ItemsController < ApplicationController
  before_action :set_category
  before_action :set_item, except: [:index, :create]
  
  def index
    render json: Item.all
  end
  
  def show
    @item = Item.find(params[:id])
    render json: @item
  end
 
  def create
    @item = @category.items.new(item_params)
    if @item.save
      render json: @item
    else
      render json: { errors: item.errors }, status: :unprocessable_entity
    end
  end
  
  
  def update
    @item = Item.find(params[:id])
    if @item.update(item_params)
      render json: @item
    else
      render json: { errors: @item.errors }, status: :unprocessable_entity
    end
  end
  
  
  def destroy
    
    @item.destroy
    render json: { message: ' deleted' }
  end
  
  private
    def item_params
      params.require(:item).permit(:name, :price)
    end

    def set_item
      @item = @Category.items.find(params[:id])
    end
    
    def set_category
      @category = Category.find(params[:category_id])
    end
end
