package com.learn.emart.item.controller;

import com.learn.emart.item.entity.ItemEntity;
import com.learn.emart.item.model.ItemView;
import com.learn.emart.item.model.MessageView;
import com.learn.emart.item.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static jdk.nashorn.internal.runtime.regexp.joni.Config.log;

@RestController
@RequestMapping(produces = {"application/json;charset=UTF-8"})
public class ItemController {

    @Autowired
    private ItemService itemService;

    // Get All Items for VIEW use
    @GetMapping("details")
    public List<ItemView> getAllItemsForItemView(){
//        System.out.println(itemService.getAllItemsForView());
        return itemService.getAllItemsForView();
    }

    @GetMapping("{id}")
    public ItemView getItemDetailById(@PathVariable("id")Integer id){
        return itemService.getItemForViewById(id);
    }

    // Add item request sample
    /*
    {
	"itemName" : "VOVO",
	"itemImage" : "https://xxx.xxxx.xxxxx9",
	"itemPrice" : 3999.99,
	"itemStock" : 500,
	"itemDescription" : "vovo description",
	"categoryId" : 1,
	"subcategoryId" : 2,
	"itemRemarks" : "vovo remarks",
	"sellerId" : 1
    }
     */
    @PostMapping("details")
    public ResponseEntity<ItemEntity> addItem(@RequestBody ItemEntity item){
        ItemEntity itemEntity = itemService.saveItem(item);
        return ResponseEntity.ok().body(itemEntity);
    }

    // update Item sample data
    /*
    {
    "itemId" : 9,
	"itemName" : "VOVO",
	"itemImage" : "https://xxx.xxxx.xxxxx9",
	"itemPrice" : 3999.99,
	"itemStock" : 500,
	"itemDescription" : "vovo description",
	"categoryId" : 1,
	"subcategoryId" : 2,
	"itemRemarks" : "vovo remarks",
	"sellerId" : 1
    }
     */
    @PutMapping("details")
    public ResponseEntity<ItemEntity> updateItem(@RequestBody ItemEntity item){
//    public ItemEntity updateItem(@RequestBody ItemEntity item){
        ItemEntity itemEntity = itemService.updateItem(item);
        return ResponseEntity.ok().body(itemEntity);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<MessageView> deleteItemById(@PathVariable("id")Integer id){
        itemService.deleteItem(id);
        MessageView result = new MessageView();
        result.setMessageCode(1);
        result.setMessage("Delete successfully");
        return ResponseEntity.ok().body(result);
    }

    @GetMapping("list/category/{id}")
    public List<ItemView> getItemViewByCategoryId(@PathVariable("id")Integer id){
        return itemService.getItemForViewByCategroyId(id);
    }

    @GetMapping("list/seller/{id}")
    public List<ItemView> getItemViewBySellerId(@PathVariable("id")Integer id){
        return itemService.getItemForViewBySellerId(id);
    }

//    @GetMapping("subcategory/{}")

}
