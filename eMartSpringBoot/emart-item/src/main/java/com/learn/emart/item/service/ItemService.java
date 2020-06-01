package com.learn.emart.item.service;

import com.learn.emart.item.entity.ItemEntity;
import com.learn.emart.item.model.ItemView;
import com.learn.emart.item.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ItemService {
    @Autowired
    private ItemRepository itemRepository;

    // Get All Items
    public List<ItemEntity> getAllItems(){
        return itemRepository.findAll();
    }

    // Get ItemById
    public ItemEntity getItemById(Integer id){
        return itemRepository.findById(id).orElse(null);
    }

    // Get All Items with category and subcategory information
    public List<ItemView> getAllItemsForView(){
        return itemRepository.findItemView();
    }

    //Get Item with category and subcategory information by id
    public ItemView getItemForViewById(Integer id){
        return itemRepository.findItemViewById(id);
    }

    //Get Item with category and subcategory information by category id
    public List<ItemView> getItemForViewByCategroyId(Integer categoryId){
        return itemRepository.findItemViewByCategoryId(categoryId);
    }

    //Get Item with category and subcategory information by subcategory id
    public List<ItemView> getItemForViewBySubCategroyId(Integer subcategoryId){
        return itemRepository.findItemViewBySubCategoryId(subcategoryId);
    }

    //Get Item with category and subcategory information by seller id
    public List<ItemView> getItemForViewBySellerId(Integer sellerId){
        return itemRepository.findItemViewBySellerId(sellerId);
    }

    //Add Item details
    public ItemEntity saveItem(ItemEntity item){
//        ItemEntity itemEntity = getItemById(item.getItemId());
        return itemRepository.saveAndFlush(item);
    }

    //update Item by itemId
    public ItemEntity updateItem(ItemEntity item){
        return itemRepository.save(item);
    }

    //delete Item by item id
    public void deleteItem(Integer id){
        itemRepository.deleteById(id);
    }

    public List<ItemEntity> updateItemByList(List<ItemEntity> itemEntities) {
        return itemRepository.saveAll(itemEntities);
    }
}
