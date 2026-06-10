// AUTO-GENERATED: one developed function per Douyin Shop (抖店) read-only interface.
// Source: the customer's API接口汇总.xlsx (exact paths). Each function calls the
// correct 抖店 method via the signed client. Business params go in `params`.
// Live calls require an approved shop API qualification + token (see dd-token).

import { ddRequest } from '../jinritemai-client.js';

/** 1、售后列表接口，可以支持多种筛选规则，详情见请求参数。（afterSale.List）  [POST afterSale.List] */
export function afterSale_List(params: Record<string, any> = {}, token: string) {
  return ddRequest('afterSale.List', '/afterSale/List', params, token);
}

/** 一期暂无平台推荐策略能力，需三方自行制定。（open.getOrderRecoveryRecommendation）  [POST open.getOrderRecoveryRecommendation] */
export function open_getOrderRecoveryRecommendation(params: Record<string, any> = {}, token: string) {
  return ddRequest('open.getOrderRecoveryRecommendation', '/open/getOrderRecoveryRecommendation', params, token);
}

/** 使用场景：（afterSale.rejectReasonCodeList）  [POST afterSale.rejectReasonCodeList] */
export function afterSale_rejectReasonCodeList(params: Record<string, any> = {}, token: string) {
  return ddRequest('afterSale.rejectReasonCodeList', '/afterSale/rejectReasonCodeList', params, token);
}

/** 提供给商家获取售后单详情信息（afterSale.Detail）  [POST afterSale.Detail] */
export function afterSale_Detail(params: Record<string, any> = {}, token: string) {
  return ddRequest('afterSale.Detail', '/afterSale/Detail', params, token);
}

/** 核心入口，用于对单一退货的订单进行全面评估（second.volcengineRetainOrder）  [POST second.volcengineRetainOrder] */
export function second_volcengineRetainOrder(params: Record<string, any> = {}, token: string) {
  return ddRequest('second.volcengineRetainOrder', '/second/volcengineRetainOrder', params, token);
}

/** 使用场景：批量查询商家抖店商品信息（product.listV2）  [POST product.listV2] */
export function product_listV2(params: Record<string, any> = {}, token: string) {
  return ddRequest('product.listV2', '/product/listV2', params, token);
}

/** 兼容老品牌id转为新品牌id（brand.convert）  [POST brand.convert] */
export function brand_convert(params: Record<string, any> = {}, token: string) {
  return ddRequest('brand.convert', '/brand/convert', params, token);
}

/** 分页查询模板列表（product.getComponentTemplate）  [POST product.getComponentTemplate] */
export function product_getComponentTemplate(params: Record<string, any> = {}, token: string) {
  return ddRequest('product.getComponentTemplate', '/product/getComponentTemplate', params, token);
}

/** 商品信息质量分查询API（product.qualityDetail）  [POST product.qualityDetail] */
export function product_qualityDetail(params: Record<string, any> = {}, token: string) {
  return ddRequest('product.qualityDetail', '/product/qualityDetail', params, token);
}

/** 商品属性推荐（product.recommendProperties）  [POST product.recommendProperties] */
export function product_recommendProperties(params: Record<string, any> = {}, token: string) {
  return ddRequest('product.recommendProperties', '/product/recommendProperties', params, token);
}

/** 商品标题热搜词推荐过滤（trade.TopSearchQueryFilter）  [POST trade.TopSearchQueryFilter] */
export function trade_TopSearchQueryFilter(params: Record<string, any> = {}, token: string) {
  return ddRequest('trade.TopSearchQueryFilter', '/trade/TopSearchQueryFilter', params, token);
}

/** 商品标题热搜词推荐（trade.TopSearchQueryPredict）  [POST trade.TopSearchQueryPredict] */
export function trade_TopSearchQueryPredict(params: Record<string, any> = {}, token: string) {
  return ddRequest('trade.TopSearchQueryPredict', '/trade/TopSearchQueryPredict', params, token);
}

/** 商品每日诊断任务查询API（product.qualityTask）  [POST product.qualityTask] */
export function product_qualityTask(params: Record<string, any> = {}, token: string) {
  return ddRequest('product.qualityTask', '/product/qualityTask', params, token);
}

/** 商品类目预测（product.GetRecommendCategory）  [POST product.GetRecommendCategory] */
export function product_GetRecommendCategory(params: Record<string, any> = {}, token: string) {
  return ddRequest('product.GetRecommendCategory', '/product/GetRecommendCategory', params, token);
}

/** 商品维度查询利益点和库存建议（promise.QueryBenefitTractionByProductId）  [POST promise.QueryBenefitTractionByProductId] */
export function promise_QueryBenefitTractionByProductId(params: Record<string, any> = {}, token: string) {
  return ddRequest('promise.QueryBenefitTractionByProductId', '/promise/QueryBenefitTractionByProductId', params, token);
}

/** 店铺开启尺码表自动优化（product.openAutoSizeTemplateOptimize）  [POST product.openAutoSizeTemplateOptimize] */
export function product_openAutoSizeTemplateOptimize(params: Record<string, any> = {}, token: string) {
  return ddRequest('product.openAutoSizeTemplateOptimize', '/product/openAutoSizeTemplateOptimize', params, token);
}

/** 店铺自播达人（buyin.queryShopSelfAuthors）  [POST buyin.queryShopSelfAuthors] */
export function buyin_queryShopSelfAuthors(params: Record<string, any> = {}, token: string) {
  return ddRequest('buyin.queryShopSelfAuthors', '/buyin/queryShopSelfAuthors', params, token);
}

/** 扫描获取商机中心全量线索信息（product.isv/scanClue）  [POST product.isv.scanClue] */
export function product_isv_scanClue(params: Record<string, any> = {}, token: string) {
  return ddRequest('product.isv.scanClue', '/product/isv/scanClue', params, token);
}

/** 批量查询搭配详情（product.batchGetCombination）  [POST product.batchGetCombination] */
export function product_batchGetCombination(params: Record<string, any> = {}, token: string) {
  return ddRequest('product.batchGetCombination', '/product/batchGetCombination', params, token);
}

/** 批量获取可分发在架线索列表（productClue.distributableCluelist）  [POST productClue.distributableCluelist] */
export function productClue_distributableCluelist(params: Record<string, any> = {}, token: string) {
  return ddRequest('productClue.distributableCluelist', '/productClue/distributableCluelist', params, token);
}

/** 提供给isv，根据店铺获取线索（product.isv/getClueList）  [POST product.isv.getClueList] */
export function product_isv_getClueList(params: Record<string, any> = {}, token: string) {
  return ddRequest('product.isv.getClueList', '/product/isv/getClueList', params, token);
}

/** 是否曝光商品（open.isExposureProducts）  [POST open.isExposureProducts] */
export function open_isExposureProducts(params: Record<string, any> = {}, token: string) {
  return ddRequest('open.isExposureProducts', '/open/isExposureProducts', params, token);
}

/** 查询SPU（根据关键属性/SPU ID）（spu.getSpu）  [POST spu.getSpu] */
export function spu_getSpu(params: Record<string, any> = {}, token: string) {
  return ddRequest('spu.getSpu', '/spu/getSpu', params, token);
}

/** 查询商品详情（product.detail）  [POST product.detail] */
export function product_detail(params: Record<string, any> = {}, token: string) {
  return ddRequest('product.detail', '/product/detail', params, token);
}

/** 查询商家是否已开启AI生图托管（product.getShopHostingInfo）  [POST product.getShopHostingInfo] */
export function product_getShopHostingInfo(params: Record<string, any> = {}, token: string) {
  return ddRequest('product.getShopHostingInfo', '/product/getShopHostingInfo', params, token);
}

/** 查询属性项的属性值（product.getCategoryPropertyValue）  [POST product.getCategoryPropertyValue] */
export function product_getCategoryPropertyValue(params: Record<string, any> = {}, token: string) {
  return ddRequest('product.getCategoryPropertyValue', '/product/getCategoryPropertyValue', params, token);
}

/** 查询店铺商品质量情况，对标后台商品成长中心（product.qualityList）  [POST product.qualityList] */
export function product_qualityList(params: Record<string, any> = {}, token: string) {
  return ddRequest('product.qualityList', '/product/qualityList', params, token);
}

/** 查询店铺尺码表自动优化配置（是否允许出自动优化弹窗（product.queryAutoSizeTemplateOptimizeConfig）  [POST product.queryAutoSizeTemplateOptimizeConfig] */
export function product_queryAutoSizeTemplateOptimizeConfig(params: Record<string, any> = {}, token: string) {
  return ddRequest('product.queryAutoSizeTemplateOptimizeConfig', '/product/queryAutoSizeTemplateOptimizeConfig', params, token);
}

/** 查询店铺属性自动优化配置（是否开启（product.queryPropAutoOptimizeConfig）  [POST product.queryPropAutoOptimizeConfig] */
export function product_queryPropAutoOptimizeConfig(params: Record<string, any> = {}, token: string) {
  return ddRequest('product.queryPropAutoOptimizeConfig', '/product/queryPropAutoOptimizeConfig', params, token);
}

/** 查询店铺维度利益点和库存推荐（promise.QueryBenefitTraction）  [POST promise.QueryBenefitTraction] */
export function promise_QueryBenefitTraction(params: Record<string, any> = {}, token: string) {
  return ddRequest('promise.QueryBenefitTraction', '/promise/QueryBenefitTraction', params, token);
}

/** 查询异步执行的根任务列表（superm.product/queryProductSyncTask）  [POST superm.product.queryProductSyncTask] */
export function superm_product_queryProductSyncTask(params: Record<string, any> = {}, token: string) {
  return ddRequest('superm.product.queryProductSyncTask', '/superm/product/queryProductSyncTask', params, token);
}

/** 根据ISBN查询书名（spu.queryBookNameByISBN）  [POST spu.queryBookNameByISBN] */
export function spu_queryBookNameByISBN(params: Record<string, any> = {}, token: string) {
  return ddRequest('spu.queryBookNameByISBN', '/spu/queryBookNameByISBN', params, token);
}

/** 根据商品信息推荐商品标题相关信息（product.getRecommendName）  [POST product.getRecommendName] */
export function product_getRecommendName(params: Record<string, any> = {}, token: string) {
  return ddRequest('product.getRecommendName', '/product/getRecommendName', params, token);
}

/** 根据类目id获取可选品牌（brand.list）  [POST brand.list] */
export function brand_list(params: Record<string, any> = {}, token: string) {
  return ddRequest('brand.list', '/brand/list', params, token);
}

/** 检索SPU（spu.QuerySpu）  [POST spu.QuerySpu] */
export function spu_QuerySpu(params: Record<string, any> = {}, token: string) {
  return ddRequest('spu.QuerySpu', '/spu/QuerySpu', params, token);
}

/** 获取商品sku列表（sku.list）  [POST sku.list] */
export function sku_list(params: Record<string, any> = {}, token: string) {
  return ddRequest('sku.list', '/sku/list', params, token);
}

/** 获取商品sku详情（sku.detail）  [POST sku.detail] */
export function sku_detail(params: Record<string, any> = {}, token: string) {
  return ddRequest('sku.detail', '/sku/detail', params, token);
}

/** 获取商品天级指标数据（compass.CommonProductSaleDataByDay）  [POST compass.CommonProductSaleDataByDay] */
export function compass_CommonProductSaleDataByDay(params: Record<string, any> = {}, token: string) {
  return ddRequest('compass.CommonProductSaleDataByDay', '/compass/CommonProductSaleDataByDay', params, token);
}

/** 获取商品生命周期标签（product.batchSearchDiaProductInfo）  [POST product.batchSearchDiaProductInfo] */
export function product_batchSearchDiaProductInfo(params: Record<string, any> = {}, token: string) {
  return ddRequest('product.batchSearchDiaProductInfo', '/product/batchSearchDiaProductInfo', params, token);
}

/** 获取商品相关店铺维度的规则（product.getProductShopRule）  [POST product.getProductShopRule] */
export function product_getProductShopRule(params: Record<string, any> = {}, token: string) {
  return ddRequest('product.getProductShopRule', '/product/getProductShopRule', params, token);
}

/** 获取商家可选类目（product.getCategories）  [POST product.getCategories] */
export function product_getCategories(params: Record<string, any> = {}, token: string) {
  return ddRequest('product.getCategories', '/product/getCategories', params, token);
}

/** 获取店铺发品限额，当前包括单店铺、单日发品限额（product.getPublishProductLimit）  [POST product.getPublishProductLimit] */
export function product_getPublishProductLimit(params: Record<string, any> = {}, token: string) {
  return ddRequest('product.getPublishProductLimit', '/product/getPublishProductLimit', params, token);
}

/** 获取级联属性，当前属性有下级属性值，选中当前属性值，通过此接口请求下级级联属性值（product.getCascadeValue）  [POST product.getCascadeValue] */
export function product_getCascadeValue(params: Record<string, any> = {}, token: string) {
  return ddRequest('product.getCascadeValue', '/product/getCascadeValue', params, token);
}

/** 通过前缀匹配召回品牌信息（brand.getSug）  [POST brand.getSug] */
export function brand_getSug(params: Record<string, any> = {}, token: string) {
  return ddRequest('brand.getSug', '/brand/getSug', params, token);
}

/** 商家ERP获取店铺下的药剂师（medicine.getShopDruggist）  [POST medicine.getShopDruggist] */
export function medicine_getShopDruggist(params: Record<string, any> = {}, token: string) {
  return ddRequest('medicine.getShopDruggist', '/medicine/getShopDruggist', params, token);
}

/** 获取成员有权限的门店（medicine.getShopMemberAuthStoreIds）  [POST medicine.getShopMemberAuthStoreIds] */
export function medicine_getShopMemberAuthStoreIds(params: Record<string, any> = {}, token: string) {
  return ddRequest('medicine.getShopMemberAuthStoreIds', '/medicine/getShopMemberAuthStoreIds', params, token);
}

/** 服务商确认（resale.order/supplierConfirm）  [POST resale.order.supplierConfirm] */
export function resale_order_supplierConfirm(params: Record<string, any> = {}, token: string) {
  return ddRequest('resale.order.supplierConfirm', '/resale/order/supplierConfirm', params, token);
}

/** 获得订单详情（recycle.buyerGetOrderDetail）  [POST recycle.buyerGetOrderDetail] */
export function recycle_buyerGetOrderDetail(params: Record<string, any> = {}, token: string) {
  return ddRequest('recycle.buyerGetOrderDetail', '/recycle/buyerGetOrderDetail', params, token);
}

/** 库存批量同步接口（sku.syncStockBatch）  [POST sku.syncStockBatch] */
export function sku_syncStockBatch(params: Record<string, any> = {}, token: string) {
  return ddRequest('sku.syncStockBatch', '/sku/syncStockBatch', params, token);
}

/** 批量查询区域仓（warehouse.list）  [POST warehouse.list] */
export function warehouse_list(params: Record<string, any> = {}, token: string) {
  return ddRequest('warehouse.list', '/warehouse/list', params, token);
}

/** 查询区域仓（warehouse.info）  [POST warehouse.info] */
export function warehouse_info(params: Record<string, any> = {}, token: string) {
  return ddRequest('warehouse.info', '/warehouse/info', params, token);
}

/** 查询商品规格库存（sku.stockNum）  [POST sku.stockNum] */
export function sku_stockNum(params: Record<string, any> = {}, token: string) {
  return ddRequest('sku.stockNum', '/sku/stockNum', params, token);
}

/** 二级承接页初始化（supplyChain.CouponZoneFeeds）  [POST supplyChain.CouponZoneFeeds] */
export function supplyChain_CouponZoneFeeds(params: Record<string, any> = {}, token: string) {
  return ddRequest('supplyChain.CouponZoneFeeds', '/supplyChain/CouponZoneFeeds', params, token);
}

/** 单个获取门店信息（shop.getStoreDetail）  [POST shop.getStoreDetail] */
export function shop_getStoreDetail(params: Record<string, any> = {}, token: string) {
  return ddRequest('shop.getStoreDetail', '/shop/getStoreDetail', params, token);
}

/** 批量查询商品锁（product.batchGetProductLocks）  [POST product.batchGetProductLocks] */
export function product_batchGetProductLocks(params: Record<string, any> = {}, token: string) {
  return ddRequest('product.batchGetProductLocks', '/product/batchGetProductLocks', params, token);
}

/** 批量查询限购模板（trade.batchGetTradeLimitTemplateList）  [POST trade.batchGetTradeLimitTemplateList] */
export function trade_batchGetTradeLimitTemplateList(params: Record<string, any> = {}, token: string) {
  return ddRequest('trade.batchGetTradeLimitTemplateList', '/trade/batchGetTradeLimitTemplateList', params, token);
}

/** 批量获取活动信息（max.activities）  [POST max.activities] */
export function max_activities(params: Record<string, any> = {}, token: string) {
  return ddRequest('max.activities', '/max/activities', params, token);
}

/** 暂停营业（shop.storeSuspend）  [POST shop.storeSuspend] */
export function shop_storeSuspend(params: Record<string, any> = {}, token: string) {
  return ddRequest('shop.storeSuspend', '/shop/storeSuspend', params, token);
}

/** 查询商家评分（shop.reputation）  [POST shop.reputation] */
export function shop_reputation(params: Record<string, any> = {}, token: string) {
  return ddRequest('shop.reputation', '/shop/reputation', params, token);
}

/** 查询店铺体验分（shop.getExperienceScore）  [POST shop.getExperienceScore] */
export function shop_getExperienceScore(params: Record<string, any> = {}, token: string) {
  return ddRequest('shop.getExperienceScore', '/shop/getExperienceScore', params, token);
}

/** 获取体验分商品综合评分商品列表（expScore.getDsrDetailProdList）  [POST expScore.getDsrDetailProdList] */
export function expScore_getDsrDetailProdList(params: Record<string, any> = {}, token: string) {
  return ddRequest('expScore.getDsrDetailProdList', '/expScore/getDsrDetailProdList', params, token);
}

/** 获取商家推广链接接口（member.getShopShortLink）  [POST member.getShopShortLink] */
export function member_getShopShortLink(params: Record<string, any> = {}, token: string) {
  return ddRequest('member.getShopShortLink', '/member/getShopShortLink', params, token);
}

/** 门店恢复营业（shop.unsuspendStore）  [POST shop.unsuspendStore] */
export function shop_unsuspendStore(params: Record<string, any> = {}, token: string) {
  return ddRequest('shop.unsuspendStore', '/shop/unsuspendStore', params, token);
}

/** 店铺装修-页面管理（shop.openShopPageManagementList）  [POST shop.openShopPageManagementList] */
export function shop_openShopPageManagementList(params: Record<string, any> = {}, token: string) {
  return ddRequest('shop.openShopPageManagementList', '/shop/openShopPageManagementList', params, token);
}

/** 店铺装修类目操作接口（shop.marketCategoryOperate）  [POST shop.marketCategoryOperate] */
export function shop_marketCategoryOperate(params: Record<string, any> = {}, token: string) {
  return ddRequest('shop.marketCategoryOperate', '/shop/marketCategoryOperate', params, token);
}

/** 查询店铺的类目信息（shop.marketCategoryQuery）  [POST shop.marketCategoryQuery] */
export function shop_marketCategoryQuery(params: Record<string, any> = {}, token: string) {
  return ddRequest('shop.marketCategoryQuery', '/shop/marketCategoryQuery', params, token);
}

/** 1、支持ISV查询当前商家可用物流公司列表;（order.queryLogisticsCompanyList）  [POST order.queryLogisticsCompanyList] */
export function order_queryLogisticsCompanyList(params: Record<string, any> = {}, token: string) {
  return ddRequest('order.queryLogisticsCompanyList', '/order/queryLogisticsCompanyList', params, token);
}

/** 四级地址查询接口（logistics.getDistrict）  [POST logistics.getDistrict] */
export function logistics_getDistrict(params: Record<string, any> = {}, token: string) {
  return ddRequest('logistics.getDistrict', '/logistics/getDistrict', params, token);
}

/** 回收服务商查询字节回收类目（logistics.QueryRecycleCateByLevelForPaging）  [POST logistics.QueryRecycleCateByLevelForPaging] */
export function logistics_QueryRecycleCateByLevelForPaging(params: Record<string, any> = {}, token: string) {
  return ddRequest('logistics.QueryRecycleCateByLevelForPaging', '/logistics/QueryRecycleCateByLevelForPaging', params, token);
}

/** 查询商家自定义区域数据（logistics.customTemplateList）  [POST logistics.customTemplateList] */
export function logistics_customTemplateList(params: Record<string, any> = {}, token: string) {
  return ddRequest('logistics.customTemplateList', '/logistics/customTemplateList', params, token);
}

/** 查询订单包裹物流（order.queryOrderLogistics）  [POST order.queryOrderLogistics] */
export function order_queryOrderLogistics(params: Record<string, any> = {}, token: string) {
  return ddRequest('order.queryOrderLogistics', '/order/queryOrderLogistics', params, token);
}

/** 获取快递公司列表（order.logisticsCompanyList）  [POST order.logisticsCompanyList] */
export function order_logisticsCompanyList(params: Record<string, any> = {}, token: string) {
  return ddRequest('order.logisticsCompanyList', '/order/logisticsCompanyList', params, token);
}

/** 获取运费模板列表（freightTemplate.list）  [POST freightTemplate.list] */
export function freightTemplate_list(params: Record<string, any> = {}, token: string) {
  return ddRequest('freightTemplate.list', '/freightTemplate/list', params, token);
}

/** 获取运费模板详情（freightTemplate.detail）  [POST freightTemplate.detail] */
export function freightTemplate_detail(params: Record<string, any> = {}, token: string) {
  return ddRequest('freightTemplate.detail', '/freightTemplate/detail', params, token);
}

/** 以旧换新隐私号接通信息查询（resale.order/queryOperationOrderCallLog）  [POST resale.order.queryOperationOrderCallLog] */
export function resale_order_queryOperationOrderCallLog(params: Record<string, any> = {}, token: string) {
  return ddRequest('resale.order.queryOperationOrderCallLog', '/resale/order/queryOperationOrderCallLog', params, token);
}

/** 同步服务范围数据（gis.serviceArea/sync）  [POST gis.serviceArea.sync] */
export function gis_serviceArea_sync(params: Record<string, any> = {}, token: string) {
  return ddRequest('gis.serviceArea.sync', '/gis/serviceArea/sync', params, token);
}

/** 查询虚拟号是否抖音平台（logistics.checkDYVirtualTel）  [POST logistics.checkDYVirtualTel] */
export function logistics_checkDYVirtualTel(params: Record<string, any> = {}, token: string) {
  return ddRequest('logistics.checkDYVirtualTel', '/logistics/checkDYVirtualTel', params, token);
}

/** 查询预校验结果接口（logistics.getAiArbitration）  [POST logistics.getAiArbitration] */
export function logistics_getAiArbitration(params: Record<string, any> = {}, token: string) {
  return ddRequest('logistics.getAiArbitration', '/logistics/getAiArbitration', params, token);
}

/** 获取物流服务商对应账户的资金日账单（logistics.queryCjAccountFLowFIleUrl）  [POST logistics.queryCjAccountFLowFIleUrl] */
export function logistics_queryCjAccountFLowFIleUrl(params: Record<string, any> = {}, token: string) {
  return ddRequest('logistics.queryCjAccountFLowFIleUrl', '/logistics/queryCjAccountFLowFIleUrl', params, token);
}

/** 行业服务操作工单（install.ticket/operateIndustryTicket）  [POST install.ticket.operateIndustryTicket] */
export function install_ticket_operateIndustryTicket(params: Record<string, any> = {}, token: string) {
  return ddRequest('install.ticket.operateIndustryTicket', '/install/ticket/operateIndustryTicket', params, token);
}

/** 查询service列表（openCloud.backendService/list）  [POST openCloud.backendService.list] */
export function openCloud_backendService_list(params: Record<string, any> = {}, token: string) {
  return ddRequest('openCloud.backendService.list', '/openCloud/backendService/list', params, token);
}

/** 查询容器服务详情（openCloud.containerService/detail）  [POST openCloud.containerService.detail] */
export function openCloud_containerService_detail(params: Record<string, any> = {}, token: string) {
  return ddRequest('openCloud.containerService.detail', '/openCloud/containerService/detail', params, token);
}

/** 查询镜像列表（openCloud.v1/imageVersion/list）  [POST openCloud.v1.imageVersion.list] */
export function openCloud_v1_imageVersion_list(params: Record<string, any> = {}, token: string) {
  return ddRequest('openCloud.v1.imageVersion.list', '/openCloud/v1/imageVersion/list', params, token);
}

/** 投稿短视频（shopVideo.publishVideo）  [POST shopVideo.publishVideo] */
export function shopVideo_publishVideo(params: Record<string, any> = {}, token: string) {
  return ddRequest('shopVideo.publishVideo', '/shopVideo/publishVideo', params, token);
}

/** 挂车视频预校验接口（shopVideo.accountShoppingCartPrecheck）  [POST shopVideo.accountShoppingCartPrecheck] */
export function shopVideo_accountShoppingCartPrecheck(params: Record<string, any> = {}, token: string) {
  return ddRequest('shopVideo.accountShoppingCartPrecheck', '/shopVideo/accountShoppingCartPrecheck', params, token);
}

/** 搜索图文（shopVideo.searchImageText）  [POST shopVideo.searchImageText] */
export function shopVideo_searchImageText(params: Record<string, any> = {}, token: string) {
  return ddRequest('shopVideo.searchImageText', '/shopVideo/searchImageText', params, token);
}

/** 查询加暗水印任务（shopVideo.getHiddenWaterMarkTask）  [POST shopVideo.getHiddenWaterMarkTask] */
export function shopVideo_getHiddenWaterMarkTask(params: Record<string, any> = {}, token: string) {
  return ddRequest('shopVideo.getHiddenWaterMarkTask', '/shopVideo/getHiddenWaterMarkTask', params, token);
}

/** 查询已投稿短视频列表（shopVideo.listVideo）  [POST shopVideo.listVideo] */
export function shopVideo_listVideo(params: Record<string, any> = {}, token: string) {
  return ddRequest('shopVideo.listVideo', '/shopVideo/listVideo', params, token);
}

/** 查询店铺下所有账号信息（shopVideo.getShopAccountInfo）  [POST shopVideo.getShopAccountInfo] */
export function shopVideo_getShopAccountInfo(params: Record<string, any> = {}, token: string) {
  return ddRequest('shopVideo.getShopAccountInfo', '/shopVideo/getShopAccountInfo', params, token);
}

/** 查询投稿需要的信息（shopVideo.getInfoForPublish）  [POST shopVideo.getInfoForPublish] */
export function shopVideo_getInfoForPublish(params: Record<string, any> = {}, token: string) {
  return ddRequest('shopVideo.getInfoForPublish', '/shopVideo/getInfoForPublish', params, token);
}

/** 查询短视频可关联商品列表（shopVideo.listRelatableProduct）  [POST shopVideo.listRelatableProduct] */
export function shopVideo_listRelatableProduct(params: Record<string, any> = {}, token: string) {
  return ddRequest('shopVideo.listRelatableProduct', '/shopVideo/listRelatableProduct', params, token);
}

/** 查询短视频数据接口（second.ecomInsight/queryShortVideoData）  [POST second.ecomInsight.queryShortVideoData] */
export function second_ecomInsight_queryShortVideoData(params: Record<string, any> = {}, token: string) {
  return ddRequest('second.ecomInsight.queryShortVideoData', '/second/ecomInsight/queryShortVideoData', params, token);
}

/** 查询视频列表（shopVideo.searchItem）  [POST shopVideo.searchItem] */
export function shopVideo_searchItem(params: Record<string, any> = {}, token: string) {
  return ddRequest('shopVideo.searchItem', '/shopVideo/searchItem', params, token);
}

/** 查询话题信息（shopVideo.getSugWords）  [POST shopVideo.getSugWords] */
export function shopVideo_getSugWords(params: Record<string, any> = {}, token: string) {
  return ddRequest('shopVideo.getSugWords', '/shopVideo/getSugWords', params, token);
}

/** 获取task列表（second.ecomInsight/taskList）  [POST second.ecomInsight.taskList] */
export function second_ecomInsight_taskList(params: Record<string, any> = {}, token: string) {
  return ddRequest('second.ecomInsight.taskList', '/second/ecomInsight/taskList', params, token);
}

/** 获取主图视频榜单接口（second.videoTop/mainPicVideo）  [POST second.videoTop.mainPicVideo] */
export function second_videoTop_mainPicVideo(params: Record<string, any> = {}, token: string) {
  return ddRequest('second.videoTop.mainPicVideo', '/second/videoTop/mainPicVideo', params, token);
}

/** 获取任务结果（second.ecomInsight/getAigcTaskResult）  [POST second.ecomInsight.getAigcTaskResult] */
export function second_ecomInsight_getAigcTaskResult(params: Record<string, any> = {}, token: string) {
  return ddRequest('second.ecomInsight.getAigcTaskResult', '/second/ecomInsight/getAigcTaskResult', params, token);
}

/** 获取任务结果（second.ecomInsight/getTaskResult）  [POST second.ecomInsight.getTaskResult] */
export function second_ecomInsight_getTaskResult(params: Record<string, any> = {}, token: string) {
  return ddRequest('second.ecomInsight.getTaskResult', '/second/ecomInsight/getTaskResult', params, token);
}

/** 获取任务详情（second.ecomInsight/taskDetail）  [POST second.ecomInsight.taskDetail] */
export function second_ecomInsight_taskDetail(params: Record<string, any> = {}, token: string) {
  return ddRequest('second.ecomInsight.taskDetail', '/second/ecomInsight/taskDetail', params, token);
}

/** 获取任务账单详情（second.ecomInsight/getTaskBillDetail）  [POST second.ecomInsight.getTaskBillDetail] */
export function second_ecomInsight_getTaskBillDetail(params: Record<string, any> = {}, token: string) {
  return ddRequest('second.ecomInsight.getTaskBillDetail', '/second/ecomInsight/getTaskBillDetail', params, token);
}

/** 获取图文音乐列表（shopVideo.getImageTextMusic）  [POST shopVideo.getImageTextMusic] */
export function shopVideo_getImageTextMusic(params: Record<string, any> = {}, token: string) {
  return ddRequest('shopVideo.getImageTextMusic', '/shopVideo/getImageTextMusic', params, token);
}

/** 获取搜后承接商品列表（shopVideo.getAfterWatchRelatedProducts）  [POST shopVideo.getAfterWatchRelatedProducts] */
export function shopVideo_getAfterWatchRelatedProducts(params: Record<string, any> = {}, token: string) {
  return ddRequest('shopVideo.getAfterWatchRelatedProducts', '/shopVideo/getAfterWatchRelatedProducts', params, token);
}

/** 获取活体检测结果（second.ecomInsight/getVisualValidateResult）  [POST second.ecomInsight.getVisualValidateResult] */
export function second_ecomInsight_getVisualValidateResult(params: Record<string, any> = {}, token: string) {
  return ddRequest('second.ecomInsight.getVisualValidateResult', '/second/ecomInsight/getVisualValidateResult', params, token);
}

/** 获取短视频榜单（second.videoTop/shortVideo）  [POST second.videoTop.shortVideo] */
export function second_videoTop_shortVideo(params: Record<string, any> = {}, token: string) {
  return ddRequest('second.videoTop.shortVideo', '/second/videoTop/shortVideo', params, token);
}

/** 1、本接口用于查询达人视角下单个或批量推广商品的详情；（buyin.kolProductsDetail）  [POST buyin.kolProductsDetail] */
export function buyin_kolProductsDetail(params: Record<string, any> = {}, token: string) {
  return ddRequest('buyin.kolProductsDetail', '/buyin/kolProductsDetail', params, token);
}

/** 商品定向计划查询（buyin.orienPlanList）  [POST buyin.orienPlanList] */
export function buyin_orienPlanList(params: Record<string, any> = {}, token: string) {
  return ddRequest('buyin.orienPlanList', '/buyin/orienPlanList', params, token);
}

/** 商品状态查询（buyin.materialsProductStatus）  [POST buyin.materialsProductStatus] */
export function buyin_materialsProductStatus(params: Record<string, any> = {}, token: string) {
  return ddRequest('buyin.materialsProductStatus', '/buyin/materialsProductStatus', params, token);
}

/** 商品选品来源转链（buyin.instPickSourceConvert）  [POST buyin.instPickSourceConvert] */
export function buyin_instPickSourceConvert(params: Record<string, any> = {}, token: string) {
  return ddRequest('buyin.instPickSourceConvert', '/buyin/instPickSourceConvert', params, token);
}

/** 抖客获取近30天内奖励订单（buyin.doukeRewardOrders）  [POST buyin.doukeRewardOrders] */
export function buyin_doukeRewardOrders(params: Record<string, any> = {}, token: string) {
  return ddRequest('buyin.doukeRewardOrders', '/buyin/doukeRewardOrders', params, token);
}

/** 支持商家通过接口对已经开启推广的商品，查询商品配置的策略（buyin.promotionStrategyList）  [POST buyin.promotionStrategyList] */
export function buyin_promotionStrategyList(params: Record<string, any> = {}, token: string) {
  return ddRequest('buyin.promotionStrategyList', '/buyin/promotionStrategyList', params, token);
}

/** 查询定向计划作者列表（buyin.orienPlanAuthors）  [POST buyin.orienPlanAuthors] */
export function buyin_orienPlanAuthors(params: Record<string, any> = {}, token: string) {
  return ddRequest('buyin.orienPlanAuthors', '/buyin/orienPlanAuthors', params, token);
}

/** 查询抖客直播间分销订单（buyin.instituteOrderAds）  [POST buyin.instituteOrderAds] */
export function buyin_instituteOrderAds(params: Record<string, any> = {}, token: string) {
  return ddRequest('buyin.instituteOrderAds', '/buyin/instituteOrderAds', params, token);
}

/** 查询联盟订单明细（alliance.getOrderList）  [POST alliance.getOrderList] */
export function alliance_getOrderList(params: Record<string, any> = {}, token: string) {
  return ddRequest('alliance.getOrderList', '/alliance/getOrderList', params, token);
}

/** 检索精选联盟商品，需达人/抖客授权（buyin.kolMaterialsProductsSearch）  [POST buyin.kolMaterialsProductsSearch] */
export function buyin_kolMaterialsProductsSearch(params: Record<string, any> = {}, token: string) {
  return ddRequest('buyin.kolMaterialsProductsSearch', '/buyin/kolMaterialsProductsSearch', params, token);
}

/** 直播间分销物料查询（buyin.liveShareMaterial）  [POST buyin.liveShareMaterial] */
export function buyin_liveShareMaterial(params: Record<string, any> = {}, token: string) {
  return ddRequest('buyin.liveShareMaterial', '/buyin/liveShareMaterial', params, token);
}

/** 类目查询（alliance.materialsProductCategory）  [POST alliance.materialsProductCategory] */
export function alliance_materialsProductCategory(params: Record<string, any> = {}, token: string) {
  return ddRequest('alliance.materialsProductCategory', '/alliance/materialsProductCategory', params, token);
}

/** 联盟商家-查询店铺联盟推广（buyin.queryShopAllianceProducts）  [POST buyin.queryShopAllianceProducts] */
export function buyin_queryShopAllianceProducts(params: Record<string, any> = {}, token: string) {
  return ddRequest('buyin.queryShopAllianceProducts', '/buyin/queryShopAllianceProducts', params, token);
}

/** 获取商家的联盟订单（buyin.queryShopAllianceOrder）  [POST buyin.queryShopAllianceOrder] */
export function buyin_queryShopAllianceOrder(params: Record<string, any> = {}, token: string) {
  return ddRequest('buyin.queryShopAllianceOrder', '/buyin/queryShopAllianceOrder', params, token);
}

/** 获取机构信息（buyin.institutionInfo）  [POST buyin.institutionInfo] */
export function buyin_institutionInfo(params: Record<string, any> = {}, token: string) {
  return ddRequest('buyin.institutionInfo', '/buyin/institutionInfo', params, token);
}

/** 获取达人直播间分享链接（buyin.kolLiveShare）  [POST buyin.kolLiveShare] */
export function buyin_kolLiveShare(params: Record<string, any> = {}, token: string) {
  return ddRequest('buyin.kolLiveShare', '/buyin/kolLiveShare', params, token);
}

/** 达人抖客红包详情（buyin.distributionRedpackDetailList）  [POST buyin.distributionRedpackDetailList] */
export function buyin_distributionRedpackDetailList(params: Record<string, any> = {}, token: string) {
  return ddRequest('buyin.distributionRedpackDetailList', '/buyin/distributionRedpackDetailList', params, token);
}

/** 选品订单明细查询接口（buyin.instituteOrderPick）  [POST buyin.instituteOrderPick] */
export function buyin_instituteOrderPick(params: Record<string, any> = {}, token: string) {
  return ddRequest('buyin.instituteOrderPick', '/buyin/instituteOrderPick', params, token);
}

/** 分页查询尺寸模板（supplyCenter.cargo/getComponentTemplate）  [POST supplyCenter.cargo.getComponentTemplate] */
export function supplyCenter_cargo_getComponentTemplate(params: Record<string, any> = {}, token: string) {
  return ddRequest('supplyCenter.cargo.getComponentTemplate', '/supplyCenter/cargo/getComponentTemplate', params, token);
}

/** 查询采购单信息（supplyCenter.order/query）  [POST supplyCenter.order.query] */
export function supplyCenter_order_query(params: Record<string, any> = {}, token: string) {
  return ddRequest('supplyCenter.order.query', '/supplyCenter/order/query', params, token);
}

/** 精选货源获取类目品牌（supplyCenter.base/brand）  [POST supplyCenter.base.brand] */
export function supplyCenter_base_brand(params: Record<string, any> = {}, token: string) {
  return ddRequest('supplyCenter.base.brand', '/supplyCenter/base/brand', params, token);
}

/** 精选货源获取类目属性（supplyCenter.base/cateProperty）  [POST supplyCenter.base.cateProperty] */
export function supplyCenter_base_cateProperty(params: Record<string, any> = {}, token: string) {
  return ddRequest('supplyCenter.base.cateProperty', '/supplyCenter/base/cateProperty', params, token);
}

/** 精选货源获取类目（supplyCenter.base/category）  [POST supplyCenter.base.category] */
export function supplyCenter_base_category(params: Record<string, any> = {}, token: string) {
  return ddRequest('supplyCenter.base.category', '/supplyCenter/base/category', params, token);
}

/** 精选货源获取货品列表（supplyCenter.cargo/list）  [POST supplyCenter.cargo.list] */
export function supplyCenter_cargo_list(params: Record<string, any> = {}, token: string) {
  return ddRequest('supplyCenter.cargo.list', '/supplyCenter/cargo/list', params, token);
}

/** 精选货源采购单推进确认收货状态（supplyCenter.order/confirm）  [POST supplyCenter.order.confirm] */
export function supplyCenter_order_confirm(params: Record<string, any> = {}, token: string) {
  return ddRequest('supplyCenter.order.confirm', '/supplyCenter/order/confirm', params, token);
}

/** 素材中心--素材搜索接口（supplyCenter.material/search）  [POST supplyCenter.material.search] */
export function supplyCenter_material_search(params: Record<string, any> = {}, token: string) {
  return ddRequest('supplyCenter.material.search', '/supplyCenter/material/search', params, token);
}

/** 批量获取视频信息（material.mGetPlayInfo）  [POST material.mGetPlayInfo] */
export function material_mGetPlayInfo(params: Record<string, any> = {}, token: string) {
  return ddRequest('material.mGetPlayInfo', '/material/mGetPlayInfo', params, token);
}

/** 搜索文件夹（material.searchFolder）  [POST material.searchFolder] */
export function material_searchFolder(params: Record<string, any> = {}, token: string) {
  return ddRequest('material.searchFolder', '/material/searchFolder', params, token);
}

/** 查看文件夹详情（material.getFolderInfo）  [POST material.getFolderInfo] */
export function material_getFolderInfo(params: Record<string, any> = {}, token: string) {
  return ddRequest('material.getFolderInfo', '/material/getFolderInfo', params, token);
}

/** 根据素材id查素材详情（material.queryMaterialDetail）  [POST material.queryMaterialDetail] */
export function material_queryMaterialDetail(params: Record<string, any> = {}, token: string) {
  return ddRequest('material.queryMaterialDetail', '/material/queryMaterialDetail', params, token);
}

/** 获取商家容量详情（material.get_cap_info）  [POST material.get_cap_info] */
export function material_get_cap_info(params: Record<string, any> = {}, token: string) {
  return ddRequest('material.get_cap_info', '/material/get_cap_info', params, token);
}

/** 分页查询营销玩法（marketing.pageQueryActivity）  [POST marketing.pageQueryActivity] */
export function marketing_pageQueryActivity(params: Record<string, any> = {}, token: string) {
  return ddRequest('marketing.pageQueryActivity', '/marketing/pageQueryActivity', params, token);
}

/** 支持根据特定条件查询营销可用商品（marketing.queryAvailableProduct）  [POST marketing.queryAvailableProduct] */
export function marketing_queryAvailableProduct(params: Record<string, any> = {}, token: string) {
  return ddRequest('marketing.queryAvailableProduct', '/marketing/queryAvailableProduct', params, token);
}

/** 查询店铺优惠券信息，与商家工作台优惠券管理模块功能一致（marketing.queryShopCouponList）  [POST marketing.queryShopCouponList] */
export function marketing_queryShopCouponList(params: Record<string, any> = {}, token: string) {
  return ddRequest('marketing.queryShopCouponList', '/marketing/queryShopCouponList', params, token);
}

/** 获取叶子类目可选的账号模板id（topup.accountTemplateList）  [POST topup.accountTemplateList] */
export function topup_accountTemplateList(params: Record<string, any> = {}, token: string) {
  return ddRequest('topup.accountTemplateList', '/topup/accountTemplateList', params, token);
}

/** 合单校验接口（order.mergeV2）  [POST order.mergeV2] */
export function order_mergeV2(params: Record<string, any> = {}, token: string) {
  return ddRequest('order.mergeV2', '/order/mergeV2', params, token);
}

/** 商家服务单详情（order.serviceDetail）  [POST order.serviceDetail] */
export function order_serviceDetail(params: Record<string, any> = {}, token: string) {
  return ddRequest('order.serviceDetail', '/order/serviceDetail', params, token);
}

/** 查看商家开票列表（order.invoiceList）  [POST order.invoiceList] */
export function order_invoiceList(params: Record<string, any> = {}, token: string) {
  return ddRequest('order.invoiceList', '/order/invoiceList', params, token);
}

/** 查询统计销量结果（bigCustomer.queryCounting）  [POST bigCustomer.queryCounting] */
export function bigCustomer_queryCounting(params: Record<string, any> = {}, token: string) {
  return ddRequest('bigCustomer.queryCounting', '/bigCustomer/queryCounting', params, token);
}

/** 根据收件人姓名、手机号查询订单（order.searchByReceiver）  [POST order.searchByReceiver] */
export function order_searchByReceiver(params: Record<string, any> = {}, token: string) {
  return ddRequest('order.searchByReceiver', '/order/searchByReceiver', params, token);
}

/** 订单列表查询（order.searchList）  [POST order.searchList] */
export function order_searchList(params: Record<string, any> = {}, token: string) {
  return ddRequest('order.searchList', '/order/searchList', params, token);
}

/** 订单详情查询（order.orderDetail）  [POST order.orderDetail] */
export function order_orderDetail(params: Record<string, any> = {}, token: string) {
  return ddRequest('order.orderDetail', '/order/orderDetail', params, token);
}

/** 资金流水明细文件下载(境内)（order.downloadShopAccountItemFile）  [POST order.downloadShopAccountItemFile] */
export function order_downloadShopAccountItemFile(params: Record<string, any> = {}, token: string) {
  return ddRequest('order.downloadShopAccountItemFile', '/order/downloadShopAccountItemFile', params, token);
}

/** 商家拉单（dutyFree.orderList）  [POST dutyFree.orderList] */
export function dutyFree_orderList(params: Record<string, any> = {}, token: string) {
  return ddRequest('dutyFree.orderList', '/dutyFree/orderList', params, token);
}

/** 批量获取货品详情（supplyChain.batchGetCargoDetail）  [POST supplyChain.batchGetCargoDetail] */
export function supplyChain_batchGetCargoDetail(params: Record<string, any> = {}, token: string) {
  return ddRequest('supplyChain.batchGetCargoDetail', '/supplyChain/batchGetCargoDetail', params, token);
}

/** 查询品牌列表（supplyChain.queryBrandList）  [POST supplyChain.queryBrandList] */
export function supplyChain_queryBrandList(params: Record<string, any> = {}, token: string) {
  return ddRequest('supplyChain.queryBrandList', '/supplyChain/queryBrandList', params, token);
}

/** 查询店铺单包裹信息（order.queryOrderPackageInfo）  [POST order.queryOrderPackageInfo] */
export function order_queryOrderPackageInfo(params: Record<string, any> = {}, token: string) {
  return ddRequest('order.queryOrderPackageInfo', '/order/queryOrderPackageInfo', params, token);
}

/** 查询货品列表（supplyChain.queryCargoList）  [POST supplyChain.queryCargoList] */
export function supplyChain_queryCargoList(params: Record<string, any> = {}, token: string) {
  return ddRequest('supplyChain.queryCargoList', '/supplyChain/queryCargoList', params, token);
}

/** 类目属性规则查询（supplyChain.queryCatePropList）  [POST supplyChain.queryCatePropList] */
export function supplyChain_queryCatePropList(params: Record<string, any> = {}, token: string) {
  return ddRequest('supplyChain.queryCatePropList', '/supplyChain/queryCatePropList', params, token);
}

/** 获取交易订单状态（crossBorder.getTradeOrderStatus）  [POST crossBorder.getTradeOrderStatus] */
export function crossBorder_getTradeOrderStatus(params: Record<string, any> = {}, token: string) {
  return ddRequest('crossBorder.getTradeOrderStatus', '/crossBorder/getTradeOrderStatus', params, token);
}
