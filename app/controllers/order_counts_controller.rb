class OrderCountsController < ApplicationController
  def order_count; end

  def get_order_count
    render json: {number: OrderCount.first.number}
  end

  def update_order
    OrderCount.first.update_attributes(number: params[:number])
    head :ok
  end
end